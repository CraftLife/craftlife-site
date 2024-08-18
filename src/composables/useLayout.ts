import { ref } from 'vue'

const sidebarActive = ref(true)

export default function useLayout() {
  return {
    sidebarActive
  }
}
