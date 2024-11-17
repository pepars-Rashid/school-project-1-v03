import React from 'react'
import StaggeredDropDown from './straggedDropdown'

export default function StudentResources() {
  return (
    <div className='flex flex-col items-center gap-[10px]'>
      <div className='relative flex flex-col gap-[47px] w-[360px] h-[230px] bg-[#6255FA] rounded-b-[25px] p-[25px]'>
        <div className='z-10 size-[50px] bg-[#B1D4FE] border-[2px] rounded-[15px]'></div>
        <div dir='rtl' className='relative'>
          <p className='text-[24px] font-semibold text-white mb-[10px]'>الملفات</p>
          <StaggeredDropDown/>
        </div>
        <Background/>
      </div>

      <div dir='rtl' className='flex w-[340px] h-[310px] bg-white rounded-[10px] p-[20px]'>
        <div className='flex justify-between items-center h-fit w-full'>
          <div className='flex items-center gap-[10px] text-[10px]'>
            <Icons.pdf/>
            <div className=''>
              <p>Practical-lab-math-1.pdf</p>
              <p>size: 2.06 MB</p>
            </div>
          </div>
          <div className='flex flex-col gap-[5px] w-[64px] h-[50px] text-[10px]'>
            <button className="h-[20px] bg-indigo-600 text-white rounded">
              دراسة
            </button>
            <button className="h-[20px] border border-indigo-600 text-indigo-600 rounded">
              تحميل
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

const Background = ()=>{
  return(
    <>
      <div className='absolute left-0 top-0'>
        <svg width="75" height="150" viewBox="0 0 75 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.98702e-06 102C7.78951e-06 103.657 1.34654 105.016 2.99512 104.85C9.85162 104.162 16.2975 101.129 21.2132 96.2132C26.8393 90.5871 30 82.9565 30 75C30 67.0435 26.8393 59.4129 21.2132 53.7868C16.2975 48.8711 9.85163 45.8375 2.99512 45.1498C1.34654 44.9844 1.46218e-05 46.3431 1.44243e-05 48L7.98702e-06 102Z" fill="#4E41D9"/>
          <path d="M1.52588e-05 145.62C1.52588e-05 148.109 2.01656 150.142 4.49736 149.992C12.8086 149.492 20.9895 147.608 28.7013 144.409C37.8007 140.633 46.0686 135.099 53.033 128.123C59.9974 121.147 65.5219 112.865 69.291 103.75C73.0601 94.6351 75 84.8659 75 75C75 65.1341 73.0601 55.3648 69.291 46.2499C65.5219 37.1351 59.9974 28.8531 53.033 21.8768C46.0686 14.9006 37.8007 9.36678 28.7012 5.59127C20.9895 2.39154 12.8085 0.507848 4.49733 0.0077318C2.01652 -0.141548 -2.28882e-05 1.89069 -2.28882e-05 4.38019L-7.62939e-06 29.1723C-7.62939e-06 31.6618 2.0206 33.6545 4.4911 33.9255C8.36652 34.3507 12.1699 35.3249 15.7857 36.8252C20.7904 38.9017 25.3377 41.9453 29.1682 45.7823C32.9986 49.6192 36.037 54.1743 38.11 59.1875C40.183 64.2007 41.25 69.5738 41.25 75C41.25 80.4262 40.183 85.7993 38.11 90.8125C36.037 95.8257 32.9986 100.381 29.1682 104.218C25.3378 108.055 20.7904 111.098 15.7857 113.175C12.1699 114.675 8.36654 115.649 4.49113 116.074C2.02061 116.346 1.52588e-05 118.338 1.52588e-05 120.828V145.62Z" fill="#7164FA"/>
        </svg>
      </div>
      <div className='absolute right-0'>
        <svg width="50" height="100" viewBox="0 0 50 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 67C50 68.6569 48.6494 70.0231 47.0111 69.7755C42.8129 69.141 38.8968 67.181 35.8579 64.1421C32.1071 60.3914 30 55.3043 30 50C30 44.6957 32.1071 39.6086 35.8579 35.8579C38.8968 32.819 42.8129 30.859 47.0111 30.2245C48.6494 29.9769 50 31.3431 50 33L50 67Z" fill="#4E41D9"/>
          <path d="M50 97.0799C50 98.7395 48.6556 100.094 47.0018 99.9949C41.461 99.6614 36.007 98.4056 30.8658 96.2725C24.7995 93.7555 19.2876 90.0662 14.6447 85.4154C10.0017 80.7646 6.31875 75.2433 3.80602 69.1667C1.29328 63.0901 -1.74813e-06 56.5772 0 50C1.74814e-06 43.4227 1.29329 36.9099 3.80603 30.8333C6.31877 24.7567 10.0017 19.2354 14.6447 14.5846C19.2876 9.93375 24.7996 6.24452 30.8658 3.72751C36.007 1.59436 41.461 0.338565 47.0018 0.00515453C48.6557 -0.094365 50 1.26046 50 2.92013L50 19.4482C50 21.1078 48.6529 22.4363 47.0059 22.617C44.4223 22.9005 41.8868 23.55 39.4762 24.5501C36.1398 25.9345 33.1082 27.9636 30.5546 30.5215C28.001 33.0795 25.9753 36.1162 24.5933 39.4583C23.2113 42.8004 22.5 46.3825 22.5 50C22.5 53.6175 23.2113 57.1996 24.5933 60.5417C25.9753 63.8838 28.0009 66.9205 30.5546 69.4785C33.1082 72.0364 36.1398 74.0655 39.4762 75.4499C41.8867 76.45 44.4223 77.0995 47.0059 77.383C48.6529 77.5637 50 78.8922 50 80.5518L50 97.0799Z" fill="#7164FA"/>
        </svg>
      </div>
    </>
  )
}

const Icons = {
  pdf: () => (
    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.26702 12.68C4.08302 12.68 3.95902 12.698 3.89502 12.716V13.894C3.97102 13.912 4.06602 13.917 4.19702 13.917C4.67602 13.917 4.97102 13.675 4.97102 13.266C4.97102 12.9 4.71702 12.68 4.26702 12.68ZM7.75402 12.692C7.55402 12.692 7.42402 12.71 7.34702 12.728V15.338C7.42402 15.356 7.54802 15.356 7.66002 15.356C8.47702 15.362 9.00902 14.912 9.00902 13.96C9.01502 13.13 8.53002 12.692 7.75402 12.692Z" fill="#7164FA"/>
      <path d="M10 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H14C14.5304 20 15.0391 19.7893 15.4142 19.4142C15.7893 19.0391 16 18.5304 16 18V6L10 0ZM5.498 14.19C5.189 14.48 4.733 14.61 4.202 14.61C4.09904 14.6111 3.99613 14.6051 3.894 14.592V16.018H3V12.082C3.40345 12.0218 3.81112 11.9944 4.219 12C4.776 12 5.172 12.106 5.439 12.319C5.693 12.521 5.865 12.852 5.865 13.242C5.864 13.634 5.734 13.965 5.498 14.19ZM9.305 15.545C8.885 15.894 8.246 16.06 7.465 16.06C6.997 16.06 6.666 16.03 6.441 16V12.083C6.8446 12.0241 7.25214 11.9963 7.66 12C8.417 12 8.909 12.136 9.293 12.426C9.708 12.734 9.968 13.225 9.968 13.93C9.968 14.693 9.689 15.22 9.305 15.545ZM13 12.77H11.468V13.681H12.9V14.415H11.468V16.019H10.562V12.03H13V12.77ZM10 7H9V2L14 7H10Z" fill="#7164FA"/>
    </svg>
  ),
};