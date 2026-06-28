import Sidebar, { SidebarContent, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@workspace/ui/components/sidebar"
import { SidebarGroup } from "@workspace/ui/components/sidebar"

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
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroupContent>
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.id}>
                        <SidebarMenuButton>
                            <span>{item.name}</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
    </Sidebar>
    )
}