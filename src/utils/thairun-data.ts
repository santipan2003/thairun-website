import { Partner, Product, Update } from "@/interfaces";;

export const productData: Product[] = [
  {
    id: 1,
    product_name: "VIRTUAL ACTIVITY ",
    product_header: "PLATFORM",
    product_description:
      "กิจกรรมส่งเสริมการดูแลสุขภาพ ให้กับบุคลากรของคุณ กิจกรรมกลุ่ม ในรูปแบบ New Normal ถึงอยู่ไกล แต่ใจเราใกล้กันสมาชิกในองค์กรสามารถเข้าร่วมกิจกรรมได้ทุกที่ ทุกเวลา เข้าร่วมกิจกรรมพร้อมกันได้หลายคนผ่านอุปกรณ์สมาร์ทโฟน สนับสนุนทุกระบบปฏิบัติการ iOS และ Android",
    image: "https://www.thai.run/wp-content/uploads/2021/01/vap_logo.png",
    path: "https://vap.thai.run/",
  },
  {
    id: 2,
    product_name: "MANGOMANGO",
    product_header: ".APP",
    product_description:
      "เราเป็นมากกว่าคลังภาพสำหรับงานพิเศษของคุณงานแต่งงาน งานรับปริญญา งานกีฬาประเพณี หรืองานพิเศษไหน เราก็พร้อมให้บริการคลังภาพขนาดใหญ่ตามที่คุณต้องการ พร้อมเทคโนโลยีการค้นหาภาพที่จะทำให้ผู้ร่วมงาน ประทับไจ ไม่ว่าผู้ร่วมงานของคุณจะอยู่มุมไหน ของภาพ พวกเขาจะไม่พลาดทุกวินาทีสำคัญ",
    image:
      "https://www.thai.run/wp-content/uploads/2022/09/mango_mango_logo.png",
    path: "https://mangomango.app/",
  },
  {
    id: 3,
    product_name: "RACE",
    product_header: "THAIRUN",
    product_description:
      "แพลตฟอร์มสำหรับ รับสมัครงานวิ่งออนไลน์อันดับ 1 ของประเทศไทย เป็นแพลตฟอร์มอัตโนมัติเต็มรูปแบบซึ่งผู้จัดงานสร้างกิจกรรมการวิ่งใหม่ได้อย่างง่ายดาย เริ่มรับข้อมูลนักวิ่งและเก็บเงินค่าลงทะเบียนได้ที่นี่",
    image:
      "https://www.thai.run/wp-content/uploads/2020/03/PIC_RACE1-e1584423501873.png",
    path: "https://race.thai.run/",
  },
  {
    id: 4,
    product_name: "SHOP",
    product_header: "THAIRUN",
    product_description:
      "เว็บร้านค้า shop.thai.run เป็นร้านค้าออนไลน์ ที่ขายเสื้อวิ่งและผลิตภัณฑ์อื่นๆ จากพันธมิตรของเรา ผลิตภัณฑ์ สามารถเปิดร้านค้าในระบบของเรานักวิ่งที่ชำระเงิน",
    image:
      "https://www.thai.run/wp-content/uploads/2020/03/PIC_SHOP1-e1584425784571.png",
    path: "https://shop.thai.run/",
  },
  {
    id: 5,
    product_name: "PHOTO",
    product_header: "THAIRUN",
    product_description:
      "เป็นแพลตฟอร์มที่ช่วยอำนวยความสะดวกให้แก่ช่างภาพ โดยช่างภาพสามารถอัปโหลดรูปภาพจากงานวิ่งเข้าสู่ระบบ ระบบจะติดแท็กรูปโดยอัตโนมัติโดยรูปถ่ายที่มีหมายเลขหรือเบอร์นักวิ่งจะสามารถค้นหาภาพเหล่านี้ได้ โดยระบบใช้การตรวจสอบ BIB อัตโนมัติ",
    image:
      "https://www.thai.run/wp-content/uploads/2020/03/PIC_PHOTO1-e1584426013331.png",
    path: "https://photo.thai.run/",
  },
  {
    id: 6,
    product_name: "VIRTUAL RUN",
    product_header: "THAIRUN",
    product_description:
      "การวิ่งภายในระยะทางและวันที่ กำหนด สามารถวิ่งที่ไหนและเวลาใดก็ได้ เป็นกิจกรรมที่เพิ่มความยืดหยุ่นในการเข้าร่วมกิจกรรมการวิ่งให้มากขึ้น ในบางกิจกรรมอาจมีกฎกติกาเพิ่มเติม",
    image: "https://www.thai.run/wp-content/uploads/2020/03/PIC_VR1.png",
    path: "https://vr.thai.run/",
  },
  {
    id: 7,
    product_name: "READ",
    product_header: "THAIRUN",
    product_description:
      "สำนักข่าวไทยรันจัดการเรื่องวิ่ง จัดทำเรื่องสั้นนักวิ่ง โค้ชส่วนตัวของคุณ อ่านได้เลยที่นี่",
    image:
      "https://www.thai.run/wp-content/uploads/2020/03/PIC_READ1-e1584445519511.png",
    path: "https://read.thai.run/",
  },
  {
    id: 8,
    product_name: "WHERE",
    product_header: "THAIRUN",
    product_description:
      "ศูนย์รวมสถานที่วิ่ง สามารถค้นหากิจกรรมงานวิ่ง ข้อมูล รูปและความคิดเห็นจากสมาชิกคนอื่น ๆ  อ่านได้เลยที่นี่",
    image: "https://www.thai.run/wp-content/uploads/2020/04/Untitled-1.png",
    path: "https://marathon.thai.run/",
  },
];

export const updateData: Update[] = [
  {
    id: 1,
    image: "IMG_9844.jpg",
    path: "https://www.thai.run/",
  },
  {
    id: 2,
    image: "IMG_9839.jpg",
    path: "https://www.thai.run/",
  },
  {
    id: 3,
    image: "IMG_9843.jpg",
    path: "https://www.thai.run/",
  },
  {
    id: 4,
    image: "IMG_9841.jpg",
    path: "https://www.thai.run/",
  },
  {
    id: 5,
    image: "IMG_9845.jpg",
    path: "https://www.thai.run/",
  },
  {
    id: 6,
    image: "IMG_9840.jpg",
    path: "https://www.thai.run/",
  },
  {
    id: 7,
    image: "IMG_9838.jpg",
    path: "https://www.thai.run/",
  },
  {
    id: 8,
    image: "IMG_9842.jpg",
    path: "https://www.thai.run/",
  },
];

export const partnerData: Partner[] = [
  {
    id: 1,
    image: "IMG_9844.jpg",
    category: "Clients",
  },
  {
    id: 2,
    image: "IMG_9839.jpg",
    category: "Clients",
  },
  {
    id: 3,
    image: "IMG_9843.jpg",
    category: "Clients",
  },
  {
    id: 4,
    image: "IMG_9841.jpg",
    category: "Clients",
  },
  {
    id: 5,
    image: "IMG_9845.jpg",
    category: "Clients",
  },
  {
    id: 6,
    image: "IMG_9840.jpg",
    category: "Clients",
  },
  {
    id: 7,
    image: "IMG_9838.jpg",
    category: "Clients",
  },
  {
    id: 8,
    image: "IMG_9842.jpg",
    category: "Clients",
  },
  {
    id: 9,
    image: "IMG_9844.jpg",
    category: "Clients",
  },
  {
    id: 10,
    image: "IMG_9839.jpg",
    category: "Clients",
  },
  {
    id: 11,
    image: "IMG_9844.jpg",
    category: "Partners",
  },
  {
    id: 12,
    image: "IMG_9839.jpg",
    category: "Partners",
  },
  {
    id: 13,
    image: "IMG_9843.jpg",
    category: "Partners",
  },
  {
    id: 14,
    image: "IMG_9841.jpg",
    category: "Partners",
  },
  {
    id: 15,
    image: "IMG_9845.jpg",
    category: "Partners",
  },
  {
    id: 16,
    image: "IMG_9840.jpg",
    category: "Partners",
  },
  {
    id: 17,
    image: "IMG_9838.jpg",
    category: "Partners",
  },
  {
    id: 18,
    image: "IMG_9842.jpg",
    category: "Partners",
  },
  {
    id: 19,
    image: "IMG_9844.jpg",
    category: "Partners",
  },
  {
    id: 20,
    image: "IMG_9839.jpg",
    category: "Partners",
  },
];
