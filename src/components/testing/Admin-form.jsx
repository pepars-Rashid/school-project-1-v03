'use client'
import React, { useState } from 'react';
import { FiEdit, FiPlus, FiTrash } from 'react-icons/fi';

const EditableRow = ({id ,value, isChecked ,isEditable, onChange, onCheck}) => {
  return (
    <form className="w-full flex gap-[10px] border-[2px] px-2 py-1" > 
      <div className='w-[70px]'>
        <input 
          type="checkbox"
          checked={isChecked}
          onChange={onCheck}
        />
      </div>
      
      <input className='w-[80px] text-center'  
      type="text" 
      value={id}
      readOnly={!isEditable}
      />
      
      <input className='flex-grow'
        type="text"
        value={value}
        disabled={!isEditable}
        onChange={onChange}
      />
    </form>
  );
};

export default function EditableTable(){
  const [rows, setRows] = useState([
    {id: 1010 ,value: 'تم إصدار جدول دوام الفصل الأول لعام 2024-2025.', isChecked: false ,isEditable: false },
    {id: 2 ,value: 'note 2', isChecked: false ,isEditable: false },
  ]);

  const handleCheckboxChange = (index) => {
    setRows(rows.map((row, i) => i === index ? { ...row, isChecked: !row.isChecked } : row));
  };

  const handleEditableChange = (index) => {
    setRows(rows.map((row, i) => i === index ? { ...row, isEditable: !row.isEditable } : row));
  };

  const handleInputChange = (index, event) => {
    const newRows = [...rows];
    newRows[index].value = event.target.value;
    setRows(newRows);
  };

  const handleSelectAll = () => {
    const allChecked = rows.every(row => row.isChecked);
    setRows(rows.map(row => ({ ...row, isChecked: !allChecked })));
  };

  const isAnyChecked = rows.some(row => row.isChecked)

  return (
    
    <div dir="rtl" className="">

      <div className="flex justify-between items-center py-[10px] pr-[10px] pl-[25px]">
        <div className='flex gap-[10px]'>
          <Button Icon={FiPlus} action={()=>{}} isActive={true}>إضافة</Button>
          <Button Icon={FiEdit} action={() => rows.forEach((_, index) => handleEditableChange(index))} isActive={isAnyChecked}>تعديل</Button>
          <Button Icon={FiTrash} action={() => rows.forEach((_, index) => handleEditableChange(index))} isActive={isAnyChecked}>حذف</Button>
        </div>
        <span className="text-[16px] font-semibold">الإعلانات العامة</span>
      </div>

      <div className="h-[3px] bg-[#BFBFBF]" />

      <div className='w-full flex gap-[10px] pr-[10px]'>
        <div className='flex gap-[10px] w-[70px]'>
          <input 
            type="checkbox" 
            onChange={handleSelectAll} 
            checked={rows.every(row => row.isChecked)}
          />
          <label>الكل</label>
        </div>
        <label className='w-[80px] text-center'>الرقم</label>
        <label className='flex-grow'>الإعلان</label>
      </div>

      {rows.map((row, index) => (
        <div key={index} className="flex items-center">
          <EditableRow
            id={row.id}
            value={row.value}
            isChecked={row.isChecked}
            isEditable={row.isEditable}
            onChange={(e) => handleInputChange(index, e)}
            onCheck={(e)=> handleCheckboxChange(index, e)}
          />
          {/* <input
            type="checkbox"
            checked={row.isEditable}
            onChange={() => handleCheckboxChange(index)}
            className="ml-2"
          /> */}
        </div>
      ))}
    </div>
  );
};

const Button = ({children, Icon, action, isActive})=> {
  return(
  <div
          onClick={(e) => action(e)}
          className={`flex justify-center items-center gap-[5px] w-[75px] h-[35px] bg-slate-100 text-[12px] font-semibold rounded-[5px] border-[3px] border-[#BFBFBF]
            ${isActive ? 'cursor-pointer opacity-100' : 'opacity-50'}`}
        >
          <Icon/>
          <span>{children}</span>
  </div>
  )
}
