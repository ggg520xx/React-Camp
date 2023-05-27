import React from 'react';

const MemberUseCancel = (props) => {

  // 父層的位置 元件傳遞抓到的 值 告知是否此訂單留言過
  const { reason } = props;
  console.log(reason)


  // 在這裡編寫你的 JSX 內容
  return (


    <>

      <strong id="" className='block'>訂單已取消</strong>

      

      <div className="py-3">

        <input className="border-gray-300 rounded-lg w-full"
          type="text"
          disabled={true}
          placeholder={reason}
        />
      </div>


      <div className="absolute bottom-0 left-0 w-full  flex flex-col">

        <p className="w-3/4 py-2 font-bold text-center text-base text-red-500 mx-auto">取消或未履約次數過多，將影響用戶未來使用權益</p>
        

      </div>



    </>
  );
};

export default MemberUseCancel;