<template>
  <div class="pt-5 md:pt-96 pb-40 flex flex-col lg:flex-row justify-between items-center container mx-auto">
      <div class="boxing">
      <div class="px-7 md:px-0 md:w-[1000px]">

          <div class="flex items-center mb-5">
          <div class="w-[1000px] border border-[#FC881D]"></div>
          <!-- <p class="font-title font-semibold text-[#FC881D] ml-3">KENAPA SIH?</p> -->
          </div>

          <p class="text-3xl font-title font-bold   ">Project Objectives</p>
          <p class="font-title text-base py-2">1. เพื่อทำการศึกษาผลกระทบการเปลี่ยนแปลงของชั้นบรรยากาศที่มีต่อการระบุพิกัดเรียลไทม์ (RTK) ของเครื่องรับ GNSS ที่มีอยู่ในเทคโนโลยี 5G อากาศยานไร้คนขับ หรืออุปกรณ์อื่น ๆ</p>
          <p class="font-title text-base py-2 ">2. เพื่อทำการศึกษาผลกระทบของพลาสมาบับเบิลที่มีต่อการระบุพิกัดเรียลไทม์ (RTK) ของเครื่องรับ GNSS ที่มีอยู่ในเทคโนโลยี 5G อากาศยานไร้คนขับ หรืออุปกรณ์อื่น ๆ</p>
          <p class="font-title text-base py-2 ">3. เพื่อพัฒนาแบบจำลองโคลบุชาแบบใหม่ที่สามารถปรับปรุงค่า RMSE ให้ดีขึ้นและระบุตำแหน่งเครื่องรับ GNSS ที่แม่นยำมากยิ่งขึ้น เมื่อเปรียบเทียบกับแบบจำลองโคลบุชาแบบเดิม</p>
          <p class="font-title text-base py-2 ">4. เพื่อศึกษาและนำเสนอวิธี RTK ที่อาศัยข้อมูลมากกว่า 1 สถานีฐาน เพื่อทำให้รับค่าปรับแก้พิกัดเครื่องรับ GNSS อย่างมีประสิทธิภาพ</p>
          <p class="font-title text-base py-5 ">5. เพื่อศึกษาและนำเสนอวิธีใหม่ที่ทันสมัย เพื่อทำให้การระบุพิกัดเรียลไทม์ของเครื่องรับ GNSS มีค่าความผิดพลาดลดลง เมื่อเปรียบเทียบกับวิธีอื่น</p>
          
          <!-- <button class="py-4 px-6 bg-[#0D0E25] rounded-full text-white font-dmsans flex items-center shadow-lg">Pelajari Lebih Lanjut <img src="/arrow.png" class="ml-3" ></button> -->
          
      </div>
      <div class="px-7 md:px-0 md:w-[1000px] boxx">

          <div class="flex items-center mb-5">
          <div class="w-[1000px] border border-[#FC881D]"></div>
          <!-- <p class="font-title font-semibold text-[#FC881D] ml-3">KENAPA SIH?</p> -->
          </div>

          <p class="text-3xl font-title font-bold  ">Scope and Activities </p>
          <p class="font-title text-base py-2">1. ศึกษา เก็บรวบรวมข้อมูล พร้อมวิเคราะห์ผลกระทบการเปลี่ยนแปลงของชั้นบรรยากาศที่มีต่อการระบุพิกัดเรียลไทม์ (RTK) ของเครื่องรับ GNSS ที่มีอยู่ในเทคโนโลยี 5G อากาศยานไร้คนขับ หรืออุปกรณ์อื่น ๆ</p>
          <p class="font-title text-base py-2 ">2. ศึกษา เก็บรวบรวมข้อมูล พร้อมวิเคราะห์ผลกระทบของพลาสมาบับเบิลที่เกิดขึ้นในต่างประเทศ จำนวน 3 ประเทศ ที่มีต่อการระบุพิกัดเรียลไทม์ (RTK) ของเครื่องรับ GNSS ที่มีอยู่ในเทคโนโลยี 5G อากาศยานไร้คนขับ หรืออุปกรณ์อื่น ๆ</p>
         <p class="font-title text-base py-2 ">3. ศึกษาวิเคราะห์ ออกแบบ และพัฒนาแบบจำลองโคลบุชาแบบใหม่ให้แก่เครื่องรับ GNSS เพื่อปรับปรุงค่า RMSE ให้ดีขึ้นและระบุตำแหน่งที่แม่นยำมากขึ้น เมื่อเปรียบเทียบกับแบบจำลองโคลบุชาแบบเดิม</p>
         <p class="font-title text-base py-2 ">4. ศึกษาและนำเสนอวิธี RTK ที่อาศัยข้อมูลมากกว่า 1 สถานีฐาน (วิธีใหม่) ให้แก่เครื่องรับ GNSS เพื่อทำให้รับค่าปรับแก้พิกัดเครื่องรับ GNSS อย่างมีประสิทธิภาพ</p>
         <p class="font-title text-base py-2 ">5. ศึกษาและนำเสนอวิธีใหม่ที่ทันสมัย เพื่อทำให้การระบุพิกัดเรียลไทม์ของเครื่องรับ GNSS มีค่าความผิดพลาดลดลง เมื่อเปรียบเทียบกับวิธีอื่น โดย</p>
         <p class="font-title text-base py-2 ">6. จัดประชุมกลุ่มย่อย (Focus Group) ผู้เกี่ยวข้องและผู้ได้รับผลกระทบ</p>
         <p class="font-title text-base py-2 ">7. จัดทำรายงานการศึกษาข้อเสนอประเทศไทยต่อโครงการวิจัย</p>
         <p class="font-title text-base py-2 ">8. จัดทำรายงานฉบับสมบูรณ์ (Final Report)</p>
          
          <!-- <button class="py-4 px-6 bg-[#0D0E25] rounded-full text-white font-dmsans flex items-center shadow-lg">Pelajari Lebih Lanjut <img src="/arrow.png" class="ml-3" ></button> -->
          
      </div>
      <div class="px-7 md:px-0 md:w-[1000px] boxx">

          <div class="flex items-center mb-5">
          <div class="w-[1000px] border border-[#FC881D]"></div>
          <!-- <p class="font-title font-semibold text-[#FC881D] ml-3">KENAPA SIH?</p> -->
          </div>

          <p class="text-3xl font-title font-bold  ">Productivity Indicators </p>
          <p class="font-title text-base py-2">1. ได้องค์ความรู้แบบบูรณาการที่เกี่ยวข้องกับผลกระทบการเปลี่ยนแปลงของชั้นบรรยากาศและผลกระทบของพลาสมาบับเบิลที่มีต่อการระบุพิกัดเรียลไทม์ (RTK) ของเทคโนโลยี 5G และอากาศยานไร้คนขับ โดยเฉพาะในพื้นที่ประเทศไทย</p>
          <p class="font-title text-base py-2">2. ได้แบบจำลองโคลบุชาแบบใหม่ที่สามารถปรับปรุงค่า RMSE ให้ดีขึ้นและระบุตำแหน่งเครื่องรับที่แม่นยำมากยิ่งขึ้น เมื่อเปรียบเทียบกับแบบจำลองโคลบุชาแบบเดิม</p>
          <p class="font-title text-base py-2">3. ได้ปรับปรุงเทคนิคการระบุพิกัดเรียลไทม์ (RTK) ให้สามารถรับค่าปรับแก้ได้อย่างมีประสิทธิภาพ เพื่อที่จะทำให้การระบุพิกัดเรียลไทม์มีค่าความผิดพลาดที่ลดลงและมีความแม่นยำในการระบุพิกัด</p>
          <p class="font-title text-base py-2">4. นำผลการศึกษานี้ไปตีพิมพ์ในการประชุมวิชาระดับนานาชาติขึ้นไปในฐานข้อมูล SCOPUS หรือ SJR จำนวน 2 บทความ</p>
          <p class="font-title text-base py-2">5. จัดประชุมกลุ่มย่อย (Focus Group) ผู้เกี่ยวข้องและผู้ได้รับผลกระทบ</p>
          
          <!-- <button class="py-4 px-6 bg-[#0D0E25] rounded-full text-white font-dmsans flex items-center shadow-lg">Pelajari Lebih Lanjut <img src="/arrow.png" class="ml-3" ></button> -->
          
      </div>
       <div class="px-7 md:px-0 md:w-[1000px] boxx">

          <div class="flex items-center mb-5">
          <div class="w-[1000px] border border-[#FC881D]"></div>
          <!-- <p class="font-title font-semibold text-[#FC881D] ml-3">KENAPA SIH?</p> -->
          </div>

          <p class="text-3xl font-title font-bold  ">Expected Benefits </p>
          <p class="font-title text-base py-2">1. ข้อเสนอแนะเชิงนโยบายที่เหมาะสม สำหรับการกำกับดูแลที่เกี่ยวข้องจากผลกระทบการเปลี่ยนแปลงของชั้นบรรยากาศและพลาสมาบับเบิลที่มีต่อการระบุพิกัดเรียลไทม์ (RTK) ของเทคโนโลยี 5G และอากาศยานไร้คนขับ</p>
          <p class="font-title text-base py-2">2. พัฒนาเทคนิค RTK ให้สามารถรับค่าปรับแก้ได้อย่างมีประสิทธิภาพ เพื่อที่จะทำให้การระบุพิกัดเรียลไทม์มีค่าความผิดพลาดที่ลดลงและมีความแม่นยำในการระบุพิกัด</p>
          <p class="font-title text-base py-2">3. ทำให้เทคโนโลยี 5G สามารถรองรับนวัตกรรมดิจิทัลใหม่ในอุตสาหกรรมต่าง ๆ ได้อย่างรวดเร็วและมีประสิทธิภาพสอดคล้องกับแนวนโยบายของรัฐบาลภายใต้แนวคิดไทยแลนด์ 4.0 และตอบสนองความต้องการของประชาชนไทยในอนาคต</p>
          
          
          <!-- <button class="py-4 px-6 bg-[#0D0E25] rounded-full text-white font-dmsans flex items-center shadow-lg">Pelajari Lebih Lanjut <img src="/arrow.png" class="ml-3" ></button> -->
          
      </div>
       <div class="px-7 md:px-0 md:w-[1000px] boxx">

          <div class="flex items-center mb-5">
          <div class="w-[1000px] border border-[#FC881D]"></div>
          <!-- <p class="font-title font-semibold text-[#FC881D] ml-3">KENAPA SIH?</p> -->
          </div>

          <p class="text-3xl font-title font-bold text-center  ">Result indicators </p>
          <p class="font-title text-base py-4 text-center">สามารถนำผลการศึกษาและวิธีใหม่ที่นำเสนอไปประยุกต์ใช้เครื่องรับ GNSS ที่มีอยู่ในเทคโนโลยี 5G อากาศยานไร้คนขับ หรืออุปกรณ์อื่น ๆ ซึ่งจะทำให้สามารถระบุตำแหน่งเครื่องรับที่แม่นยำมากยิ่งขึ้น รวมถึงเป็นการรองรับนวัตกรรมดิจิทัลใหม่ในอุตสาหกรรมต่าง ๆ ที่เป็นแบบไร้คนขับและเคลื่อนที่เองอัตโนมัติได้อย่างมีประสิทธิภาพมากขึ้น</p>
         
          
          
          <!-- <button class="py-4 px-6 bg-[#0D0E25] rounded-full text-white font-dmsans flex items-center shadow-lg">Pelajari Lebih Lanjut <img src="/arrow.png" class="ml-3" ></button> -->
          
      </div>
      
      </div>
      


    <div class="grid grid-cols-1 md:grid-cols-2 lg:mt-0 mt-28">

        <!-- <div class="w-[290px] bg-[#0D0E25] text-white rounded-lg p-9">
            <div class="flex items-center">
                <img src="/icon-database.png" alt="">
                <p class="font-title font-semibold ml-5">Database</p>
            </div>
            <p class="font-title mt-7">
                Data insight yang banyak kan bakal disimpen di database, ya kalo datanya banyak kan jadi gede juga size database-nya.
            </p>
        </div>

        <div class="w-[290px] rounded-lg p-9">
            <div class="flex items-center">
                <img src="/server.png" alt="">
                <p class="font-title font-semibold ml-5">Server</p>
            </div>
            <p class="font-title mt-7">
                Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis server harus idup terus, itu butuh listrik! 
            </p>
        </div>

                <div class="w-[290px] rounded-lg p-9">
            <div class="flex items-center">
                <img src="/listrik.png" alt="">
                <p class="font-title font-semibold ml-5">Listrik</p>
            </div>
            <p class="font-title mt-7">
                Biaya listrik mahal, bos! Listrik kita ini masih batu bara, nggak bagus buat lingkungan. Kalo pake nuklir sih oke-oke aja.
            </p>
        </div>

            <div class="w-[290px] border-t border-l p-9">
            <div class="flex items-center">
                <img src="/lingkungan.png" alt="">
                <p class="font-title font-semibold ml-5">Lingkungan</p>
            </div>
            <p class="font-title mt-7">
                Pokoknya nggak bagus lah buat lingkungan, ini alesan kita kenapa gak kasih insight. Demi menyelamatkan bumi!
            </p>
        </div> -->


    </div>
    
  </div>
  <div class="w-[2000px] border border-[#FC881D]"></div>
</template>

<script>
export default {

}
</script>
<style>
  .boxing{
      display: block;
  margin-left: auto;
  margin-right: auto;
  }
  .boxx{
      margin-top: 5%;
  }
</style>