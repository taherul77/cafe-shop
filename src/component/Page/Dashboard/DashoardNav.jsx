import { NavLink } from "react-router-dom";

const DashboardNav = () => {
    const routes = [
        { name: "Summary", path: "/dashboard/summary" },
        { name: "Customers", path: "/dashboard/customers" },
        { name: "Orders", path: "/dashboard/orders" },
        { name: "Products", path: "/dashboard/products" },
    ];

    return (
        <ul className="lg:sticky lg:top-28 flex lg:flex-col justify-center gap-5 mb-10 lg:mx-10 mt-20 lg:mt-0">
            {routes.map((item, i) => (
                <NavLink
                    to={item?.path}
                    key={i}
                    className={({ isActive }) =>
                        isActive
                            ? "capitalize font-bold lg:text-2xl cursor-pointer hover:text-primary text-primary"
                            : "capitalize font-bold lg:text-2xl cursor-pointer hover:text-primary"
                    }
                >
                    {item?.name}
                </NavLink>
            ))}
        </ul>
    );
};

export default DashboardNav;
