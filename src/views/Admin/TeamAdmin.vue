<template>
  <AdminLayout>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Manage Team</h1>

      <TeamForm 
        v-if="!showEditForm"
        @save="saveTeam" 
      />
      
      <TeamEditForm
        v-if="showEditForm"
        :team="selectedTeam"
        @save="updateTeam"
        @cancel="cancelEdit"
      />
      
      <TeamTable 
        :teams="teams" 
        @edit="openEdit"
        @delete="deleteTeam" 
      />
    </div>
  </AdminLayout>
</template>

<script>
import { ref, onMounted } from "vue"
import API from "@/services/api"
import AdminLayout from "@/components/Admin/AdminLayout.vue"
import TeamForm from "@/components/Admin/Team/TeamForm.vue"
import TeamEditForm from "@/components/Admin/Team/TeamEditForm.vue"
import TeamTable from "@/components/Admin/Team/TeamTable.vue"

export default {
  components: { AdminLayout, TeamForm, TeamEditForm, TeamTable },

  setup() {
    const teams = ref([])
    const showEditForm = ref(false)
    const selectedTeam = ref(null)

    const fetchTeam = async () => {
      try {
        const response = await API.get('/admin/team')
        teams.value = response.data
      } catch (err) {
        console.error('Error fetching team:', err)
        alert('Gagal memuat team')
      }
    }

    const saveTeam = async (team) => {
      try {
        await API.post('/admin/team', team)
        alert('Team member berhasil ditambahkan!')
        await fetchTeam()
      } catch (err) {
        console.error('Error saving team:', err)
        alert(err.response?.data?.msg || 'Gagal menyimpan team member')
      }
    }

    const openEdit = (team) => {
      selectedTeam.value = { ...team }
      showEditForm.value = true
    }

    const cancelEdit = () => {
      showEditForm.value = false
      selectedTeam.value = null
    }

    const updateTeam = async (formData) => {
      try {
        await API.put(`/admin/team/${selectedTeam.value.id}`, formData)
        alert('Team member berhasil diupdate!')
        await fetchTeam()
        cancelEdit()
      } catch (err) {
        console.error('Error updating team:', err)
        alert(err.response?.data?.msg || 'Gagal update team member')
      }
    }

    const deleteTeam = async (id) => {
      if (!confirm('Yakin ingin menghapus team member ini?')) return
      try {
        await API.delete(`/admin/team/${id}`)
        alert('Team member berhasil dihapus!')
        await fetchTeam()
      } catch (err) {
        console.error('Error deleting team:', err)
        alert('Gagal menghapus team member')
      }
    }

    onMounted(() => {
      fetchTeam()
    })

    return { teams, showEditForm, selectedTeam, saveTeam, openEdit, cancelEdit, updateTeam, deleteTeam }
  },
}
</script>
