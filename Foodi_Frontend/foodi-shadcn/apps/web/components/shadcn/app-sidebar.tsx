import { Sidebar } from "@workspace/ui/components/sidebar"
import { SidebarGroup,SidebarHeader,SidebarFooter,SidebarContent} from "@workspace/ui/components/sidebar"

const items = [
    {
        id:1,
        name : "saptarshi"
    },
    {
        id:2,
        name : "sourav"
    },
]
export default function AppSidebar(){
    return (
        <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
    )
}
