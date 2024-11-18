'use client'
import {useState } from "react";
import {
  FiChevronLeft,
  FiChevronsLeft
} from "react-icons/fi";
import { motion } from "framer-motion";

export default function SidebarX(){
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("الرئيسية");
  return (
    <motion.nav
      layout
      className="relative h-screen shrink-0 border-r border-slate-300 p-[50px] bg-[#07193B] rounded-l-[25px]"
      style={{
        width: open ? "335px" : "fit-content",
      }}
    >
      {/* <TitleSection open={} /> */}

      <div dir="rtl" className="space-y-1">
        <Option
          Icon={Icons.home}
          title="الرئيسية"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <DropdownMenu
        selected={selected}
        setSelected={setSelected}
        open={open}
        />
        <Option
          Icon={Icons.mailBox}
          title="صندوق البريد"
          selected={selected}
          setSelected={setSelected}
          open={open}
          notifs={3}
        />
        <Option
          Icon={Icons.appManagement}
          title="إدارة التطبيق"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={Icons.settings}
          title="إعدادات"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
      </div>

      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

const Option = ({Icon, title, selected, setSelected, open, notifs }) => {
  const [openDrop, setOpenDrop] = useState(false);
  return (
    <motion.button
      layout
      onClick={() => {setSelected(title)
                      setOpenDrop(title==='المستخدمين'? !openDrop: false)
      }}
      className={`relative flex gap-[15px] px-[25px] py-[15px] h-[58px] w-full items-center rounded-[15px] transition-colors ${selected === title ? "bg-[#1D286A]" : "hover:bg-[#1D286A]"}`}
    >
      <motion.div
        layout
        className="grid h-full place-content-center"
      >
        <Icon />
      </motion.div>
      {open && (
        <motion.p
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="text-[24px] font-semibold text-white"
        >
        <span>
          {title}
        <span className={`absolute text-white transform transition-transform duration-300 ${title==='المستخدمين' ? (openDrop ? '-rotate-90':'') : 'hidden' } text-[32px]`}>
          <FiChevronLeft/>
          </span>
        </span>
        </motion.p>
      )}

      {notifs && open && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          style={{ y: "-50%" }}
          transition={{ delay: 0.5 }}
          className="absolute right-[12px] top-1/4 size-4 rounded bg-indigo-500 text-xs text-white"
        >
          {notifs}
        </motion.span>
      )}
    </motion.button>
  );
};

const DropdownMenu = ({ selected, setSelected, open}) => {
  const [openDrop, setOpenDrop] = useState(false);
  const dropArray = ['المستخدمين', 'الطلاب', 'المدرسين', 'الموظفين' ]
  const toggleDropdown = () => {
    setSelected('المستخدمين')
    setOpenDrop(!openDrop);
  };

  return (
    <div className="relative space-y-1">
      <div className={`rounded-[15px] ${dropArray.includes(selected) ? 'bg-[#1D286A]': ''}`}>
      <Option 
        Icon={Icons.users} 
        title='المستخدمين'
        selected={selected} 
        setSelected={toggleDropdown} 
        open={open} 
      >
      </Option>
      </div>
      {openDrop && (
        <motion.div
          className="top-full shadow-lg rounded"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
        <div className="max-w-[200px] space-y-1">
          <Option Icon={Icons.users} title="الطلاب" selected={selected} setSelected={setSelected} open={open} notifs="3" />
          <Option Icon={Icons.users} title="المدرسين" selected={selected} setSelected={setSelected} open={open} notifs="5" />
          <Option Icon={Icons.users} title="الموظفين" selected={selected} setSelected={setSelected} open={open} />
        </div>
        </motion.div>
      )}
    </div>
  );
};

const ToggleClose = ({ open, setOpen }) => {
  return (
    <motion.button
      layout
      onClick={() => setOpen((pv) => !pv)}
      className="absolute bottom-0 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-[#1D286A]"
    >
      <div className="flex items-center p-2">
        <motion.div
          layout
          className="grid size-10 place-content-center text-lg"
        >
          <FiChevronsLeft
            className={`text-white transition-transform ${open && "rotate-180"}`}
          />
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-xl font-medium text-white"
          >
            اغلق
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};

const Icons = {
  home: ()=> (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 0C14 0 5.3396 8.30667 0.4998 12.8053C0.2156 13.0916 0 13.5084 0 14C0 14.8602 0.6258 15.5556 1.4 15.5556H4.2V26.4444C4.2 27.3047 4.8258 28 5.6 28H9.8C10.5742 28 11.2 27.3031 11.2 26.4444V20.2222H16.8V26.4444C16.8 27.3031 17.4258 28 18.2 28H22.4C23.1742 28 23.8 27.3047 23.8 26.4444V15.5556H26.6C27.3742 15.5556 28 14.8602 28 14C28 13.5084 27.7844 13.0916 27.4638 12.8053C22.6576 8.30667 14 0 14 0Z" fill="white"/>
    </svg>
  ),
  users: ()=> (
    <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.2 8.57143C5.74437 8.57143 7 7.29018 7 5.71429C7 4.13839 5.74437 2.85714 4.2 2.85714C2.65562 2.85714 1.4 4.13839 1.4 5.71429C1.4 7.29018 2.65562 8.57143 4.2 8.57143ZM23.8 8.57143C25.3444 8.57143 26.6 7.29018 26.6 5.71429C26.6 4.13839 25.3444 2.85714 23.8 2.85714C22.2556 2.85714 21 4.13839 21 5.71429C21 7.29018 22.2556 8.57143 23.8 8.57143ZM25.2 10H22.4C21.63 10 20.9344 10.317 20.4269 10.8304C22.19 11.817 23.4412 13.5982 23.7125 15.7143H26.6C27.3744 15.7143 28 15.0759 28 14.2857V12.8571C28 11.2813 26.7444 10 25.2 10ZM14 10C16.7081 10 18.9 7.76339 18.9 5C18.9 2.23661 16.7081 0 14 0C11.2919 0 9.1 2.23661 9.1 5C9.1 7.76339 11.2919 10 14 10ZM17.36 11.4286H16.9969C16.0869 11.875 15.0762 12.1429 14 12.1429C12.9237 12.1429 11.9175 11.875 11.0031 11.4286H10.64C7.8575 11.4286 5.6 13.7321 5.6 16.5714V17.8571C5.6 19.0402 6.54062 20 7.7 20H20.3C21.4594 20 22.4 19.0402 22.4 17.8571V16.5714C22.4 13.7321 20.1425 11.4286 17.36 11.4286ZM7.57313 10.8304C7.06563 10.317 6.37 10 5.6 10H2.8C1.25563 10 0 11.2813 0 12.8571V14.2857C0 15.0759 0.625625 15.7143 1.4 15.7143H4.28312C4.55875 13.5982 5.81 11.817 7.57313 10.8304Z" fill="white"/>
    </svg>
  ),
  mailBox: ()=> (
    <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 4V21.5H28V4L14 12.75L0 4Z" fill="white"/>
      <path d="M0 2.25L14 11L28 2.25V0.5H0V2.25Z" fill="white"/>
    </svg>
  ),
  appManagement: ()=> (
    <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.814 12.8104C21.7549 12.5468 21.6117 12.2979 21.3855 12.0968C21.1581 11.8972 20.8805 11.7768 20.5926 11.7325L15.965 10.821L17.3038 11.7255L15.1902 18.469L14.0001 13.4599L12.8093 18.4691L10.6967 11.7256L12.035 10.8212L7.40736 11.7326C7.11952 11.7769 6.84203 11.8972 6.61439 12.097C6.38815 12.298 6.24479 12.547 6.18599 12.8106L4.81396 18.9445L7.40218 19.8586C8.26138 20.7677 10.6666 21.4365 13.5514 21.5002H14.0001H14.4485C17.3332 21.4366 19.7382 20.7677 20.5977 19.8586L23.186 18.9445L21.814 12.8104Z" fill="white"/>
      <path d="M14.0003 11.5059L12.9336 11.8946L14.0003 13.4599L15.0672 11.8946L14.0003 11.5059Z" fill="white"/>
      <path d="M17.9608 5.4656C17.9608 2.68165 16.8352 0.499878 14.0002 0.499878C11.1651 0.499878 10.04 2.68179 10.04 5.4656C9.74349 5.62306 9.54874 5.99256 9.83995 6.78441C9.98681 7.18198 10.2457 7.51513 10.4653 7.68955C11.2733 9.73694 12.8622 11.3175 14.0002 11.3175C15.1383 11.3175 16.7274 9.73694 17.5349 7.68955C17.7548 7.51513 18.0133 7.18183 18.1606 6.78441C18.4518 5.99241 18.2572 5.62306 17.9608 5.4656Z" fill="white"/>
      <path d="M4.47391 17.5455C3.15285 17.3866 2.11151 17.0232 1.67821 16.5649L0 15.9722L0.889573 11.9952C0.927794 11.8244 1.0209 11.6628 1.16748 11.5327C1.31504 11.4033 1.49494 11.3249 1.68157 11.2964L4.93171 10.5388C4.44269 10.1131 3.96794 9.44567 3.66428 8.6749C3.52175 8.56205 3.35389 8.34602 3.25855 8.0881C3.06955 7.57497 3.19583 7.33543 3.38819 7.23312C3.38819 5.42826 4.11732 4.01369 5.95569 4.01369H5.95611C7.79406 4.01369 8.52361 5.42826 8.52361 7.23312C8.71597 7.33543 8.84225 7.57497 8.65353 8.0881C8.55805 8.34602 8.39019 8.56205 8.24766 8.6749C7.944 9.44553 7.46911 10.113 6.98023 10.5388L8.41735 10.8739L7.29859 11.0941C6.88558 11.1596 6.5052 11.337 6.19607 11.6088C5.87477 11.8945 5.65636 12.2601 5.56522 12.6665L4.47391 17.5455ZM27.1108 11.9951C27.0723 11.8242 26.9795 11.6626 26.8329 11.5325C26.6857 11.4031 26.5058 11.3248 26.3189 11.2963L23.0688 10.5386C23.5579 10.113 24.0325 9.44553 24.3366 8.67476C24.4792 8.5619 24.6467 8.34588 24.742 8.08796C24.931 7.57483 24.8047 7.33529 24.6125 7.23298C24.6125 5.42812 23.8825 4.01355 22.0445 4.01355C20.2062 4.01355 19.4767 5.42812 19.4767 7.23298C19.2846 7.33529 19.1582 7.57483 19.3472 8.08796C19.4422 8.34588 19.6101 8.5619 19.7526 8.67476C20.0566 9.44538 20.5313 10.1128 21.0203 10.5386L19.5829 10.8738L20.7017 11.0939C21.1144 11.1595 21.4951 11.3369 21.8015 11.6061C22.1255 11.8942 22.3435 12.26 22.4346 12.6658L23.5261 17.5455C24.8472 17.3866 25.8885 17.0232 26.3219 16.5649L28 15.9722L27.1108 11.9951Z" fill="white"/>
    </svg>
  ),
  settings: ()=> (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.7411 16.8L25.2421 15.9833C23.6183 15.05 23.6183 12.8333 25.2421 11.9L26.7411 11.0833C27.9902 10.3833 28.3649 8.98333 27.6155 7.93333L26.3663 5.95C25.6169 4.78333 24.1179 4.43333 22.9937 5.13333L21.4947 5.95C19.8709 6.88333 17.7474 5.71667 17.7474 3.96667V2.33333C17.7474 1.05 16.6232 0 15.2491 0H12.7509C11.3768 0 10.2526 1.05 10.2526 2.33333V3.85C10.2526 5.6 8.12912 6.76667 6.50525 5.83333L5.00631 5.13333C3.75718 4.43333 2.25823 4.9 1.63367 5.95L0.384546 7.93333C-0.240016 9.1 0.134721 10.5 1.25893 11.2L2.75788 12.0167C4.38174 12.8333 4.38174 15.1667 2.75788 15.9833L1.25893 16.8C0.00980852 17.5 -0.364929 18.9 0.384546 19.95L1.63367 21.9333C2.38314 23.1 3.88209 23.45 5.00631 22.75L6.50525 22.05C8.12912 21.1167 10.2526 22.2833 10.2526 24.0333V25.6667C10.2526 26.95 11.3768 28 12.7509 28H15.2491C16.6232 28 17.7474 26.95 17.7474 25.6667V24.15C17.7474 22.4 19.8709 21.2333 21.4947 22.1667L22.9937 22.9833C24.2428 23.6833 25.7418 23.2167 26.3663 22.1667L27.6155 20.1833C28.24 18.9 27.8653 17.5 26.7411 16.8ZM14 18.6667C11.2519 18.6667 9.0035 16.5667 9.0035 14C9.0035 11.4333 11.2519 9.33333 14 9.33333C16.7481 9.33333 18.9965 11.4333 18.9965 14C18.9965 16.5667 16.7481 18.6667 14 18.6667Z" fill="white"/>
    </svg>
  ),
}