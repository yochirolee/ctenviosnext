import { Sidebar } from "@/Components/DashboardComponents/Sidebar/SideBar";

const DashboardLayout = ({ children }) => {
	return (
		<div>
			<div class="grid grid-flow-col grid-cols-12 mt-4 ">
				<Sidebar />
				<div className="col-span-9 p-4">{children}</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
