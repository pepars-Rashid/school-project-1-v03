'use client'
import {
  FiEdit,
  FiChevronDown,
  FiTrash,
  FiShare,
  FiPlusSquare,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { IconType } from "react-icons";

export default function StaggeredDropDown(){
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute flex items-center justify-center">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex w-[320px] h-[50px] items-center justify-between px-3 py-2 rounded-[15px] text-indigo-50 bg-[#7164FA]"
        >
          <div className="flex gap-[10px]">
            <Icons.math/>
            <span className="font-medium text-[16px]">
              رياضيات 
            </span>
          </div>
          <motion.span variants={iconVariants}>
            <FiChevronDown className="text-[28px]"/>
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 w-full p-2 rounded-lg bg-[#7164FA] shadow-xl absolute top-[120%] left-[50%] overflow-hidden"
        >
          <Option setOpen={setOpen} Icon={Icons.math} text="فيزياء" />
          <Option setOpen={setOpen} Icon={Icons.math} text="كيمياء" />
          <Option setOpen={setOpen} Icon={Icons.math} text="عربي" />
          <Option setOpen={setOpen} Icon={Icons.math} text="فرنسي" />
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, Icon, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-[16px] font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-white hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};

const Icons = {
  math: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="28" rx="5" fill="white"/>
      <path d="M5 19.5714H11.5455" stroke="#7164FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.27283 16.1429V23" stroke="#7164FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.5455 7.57141H5" stroke="#7164FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M23 17.4393H16.4546" stroke="#7164FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M23 21.7036H16.4546" stroke="#7164FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M22.1819 5L17.2728 10.1429" stroke="#7164FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M22.1819 10.1429L17.2728 5" stroke="#7164FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  ),
};