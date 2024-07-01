import dashIcon from "../Assets/dash-icon.svg";
import cardTick from "../Assets/card-tick.svg";
import users from "../Assets/users.svg";
import hierarchy from "../Assets/hierarchy-3.svg";
import grid6 from "../Assets/grid-6.svg";
const sideMenus = [
  { id: 1, name: "Dashboard", path: "dashboard", icon: dashIcon },
  { id: 2, name: "Users", path: "users", icon: users },
  { id: 3, name: "Payments", path: "dashboard", icon: cardTick },
  { id: 31, name: "Plans", path: "plan-management", icon: grid6 },
  { id: 43, name: "Staffs", path: "roles", icon: users },
  { id: 5, name: "Roles & Permissions", path: "role-management", icon: hierarchy },

  // { id: 5, name: 'Announcements', path: 'annoucements', icon :"fa fa-bell" },
  // { id: 6, name: 'Payments', path: 'payments', icon:"fa fa-money" },
  // { id: 6, name: 'Registrations', path: 'registrations', icon:"fa fa-signal" },
  // { id: 6, name: 'Discussions', path: 'discussions', icon:"fa fa-pencil-square-o" },
  // { id: 6, name: 'Prayer Requests', path: 'prayer-requests', icon:"fa fa-leaf" },
  // { id: 6, name: 'Community', path: 'community', icon:"fa fa-eye" },
  // { id: 61, name: 'Past Events', path: 'past-events', icon:"fa fa-eye" },

  // { id: 6, name: 'Donations', path: 'donations', icon:"https://res.cloudinary.com/victor-ent/image/upload/v1645339670/notifications_wf3rel.svg" },
];
export default sideMenus;
