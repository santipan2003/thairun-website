import { Product } from "@/interfaces";

export const productData: Product[] = [
  {
    id: 1,
    product_name: "PHOTO",
    product_header: "THAIRUN",
    product_description:
      "เป็นแพลตฟอร์มที่ช่วยอำนวยความสะดวกให้แก่ช่างภาพ โดยช่างภาพสามารถอัปโหลดรูปภาพจากงานวิ่งเข้าสู่ระบบ ระบบจะติดแท็กรูปโดยอัตโนมัติโดยรูปถ่ายที่มีหมายเลขหรือเบอร์นักวิ่งจะสามารถค้นหาภาพเหล่านี้ได้ โดยระบบใช้การตรวจสอบ BIB อัตโนมัติ",
    image: "/1.png",
    path: "https://photo.thai.run/",
    features: [
      "ผู้เปิดงานสามารถเปิดงานค้นภาพได้เองผ่านทางเว็บไซต์ (ในงานวิ่งหนึ่งงาน จะมีเพียงผู้เปิดงานค้นภาพได้เพียง 1 ท่าน ซึ่งอาจเป็นตากล้อง ผู้จัดงาน หรือเจ้าของงานท่านใดท่านหนึ่ง โดยจะต้องได้รับอนุญาตจากผู้จัดงานหรือเจ้าของงานแล้วเท่านั้น)",
      "การตั้งราคาขายภาพ ผู้เปิดงานสามารถตั้งราคาขายภาพได้เอง ทั้งแบบขายเดี่ยว (เช่น ภาพละ 100 บาท, 80 บาท หรือ 60 บาท เป็นต้น) และตั้งราคาแบบขายเหมาได้เอง (เช่น เหมาทุกรูปจาก 1 การค้นหา ที่ 1099 บาท, 899 บาท หรือ 599 บาท และในกรณีผู้จัดไม่รับส่วนแบ่งการขาย สามารถตั้งราคาขายแพคเหมาลดลงได้อีก เช่น แบบเหมา 399 บาท)",
      "ส่วนแบ่งระหว่างผู้เปิดงานและระบบไทยรัน (75% : 25%) ผู้เปิดงานได้ 75% ของยอดขายภาพ (จากยอดขาย 30 วัน)",
      "ผู้เปิดงานสามารถกดเบิกส่วนแบ่งการขายภาพจากระบบได้เอง (และนำไปจัดการแบ่งกับตากล้องหรือผู้จัดหรือเจ้าของงานได้ภายนอกระบบ)",
      "ผู้เปิดงานสามารถตั้งราคาขายภาพได้เอง ทั้งแบบขายภาพเดี่ยวและแพคขายภาพเหมา",
      "มีกัปตัน (หัวหน้าช่างภาพ) ไปดูแลการจัดการตากล้องหน้างาน",
      "ระบบสามารถติดโลโก้หรือกรอบภาพได้โดยอัตโนมัติ",
      "ผู้จัดสามารถสร้างโค้ดส่วนลด Voucher ได้",
      "มีระบบชำระเงินอัตโนมัติที่หลากหลาย",
      "มี Customer Support ในกรณีที่มีปัญหา ตลอดเวลาทำการ",
      "ระบบทำการเก็บภาพทั้งหมดและขายเป็นระยะเวลา 45 วัน",
      "ให้ภาพ Highlight กับเจ้าของงานวิ่ง 200 รูป",
      "ระบบสามารถติดกรอบโลโก้ได้",
      "ระบบช่วยติด Timestamp ได้โดยอัตโนมัติ (เชื่อมโยงข้อมูลกับระบบจับเวลาของ partners)",
    ],
  },
  {
    id: 2,
    product_name: "RACE",
    product_header: "THAIRUN",
    product_description:
      "แพลตฟอร์มสำหรับ รับสมัครงานวิ่งออนไลน์อันดับ 1 ของประเทศไทย เป็นแพลตฟอร์มอัตโนมัติเต็มรูปแบบซึ่งผู้จัดงานสร้างกิจกรรมการวิ่งใหม่ได้อย่างง่ายดาย เริ่มรับข้อมูลนักวิ่งและเก็บเงินค่าลงทะเบียนได้ที่นี่",
    image: "/2.png",
    path: "https://race.thai.run/",
    features: [
      "ระบบสมัครผ่านเว็บไซต์ http://race.thai.run/xxxx (ดูตัวอย่างเว็บไซต์ได้ที่ https://race.thai.run)",
      "เว็บไซต์แสดงชื่องานวิ่ง จังหวัดที่จัดงาน และวันที่แข่งขันอย่างชัดเจน",
      "เว็บไซต์รองรับทั้งภาษาไทย อังกฤษ และจีน",
      "ระบบสามารถจดจำประวัติที่อยู่ของนักวิ่งและเพื่อนได้โดยไม่ต้องกรอกข้อมูลใหม่ทุกครั้ง",
      "นักวิ่งสามารถดูประวัติการสมัครของงานวิ่งที่เคยสมัครผ่านมา",
      "สามารถชำระเงินหลากหลายช่องทาง (บัตรเครดิต, Line Pay, TrueMoney, QR Code)",
      "มี email ยืนยันการสมัครแบบอัตโนมัติ พร้อม QR code เพื่อรับบิบ",
      "สามารถขายสินค้าพ่วงกับการสมัครวิ่งได้",
      "สามารถใช้โค้ดพิเศษในการสมัครได้หลายรูปแบบ (โค้ดส่วนลดยอดเงิน, โค้ดส่วนลดเปอร์เซนต์, โค้ดสำหรับ VIP, โค้ดฟรี เป็นต้น)",
      "สามารถสมัครได้ทั้งแบบ Online และ On Site (รับสมัครแบบตั้งโต๊ะ)",
      "สามารถเปิดรับสมัครแบบมาก่อนได้ก่อน หรือรับสมัครแบบ lotto ได้",
      "กำหนดรูปแบบการรับสมัครหลายประเภทได้ เช่น รอบ early bird / รอบนักวิ่งเก่า / รูปแบบการสมัครแบบ Lotto",
      "ระบบสามารถกำหนดรูปแบบการสมัครพิเศษ เช่น นักวิ่งศิษย์เก่าสามารถสมัครได้ในราคาพิเศษ",
      "สามารถจำกัดจำนวนนักวิ่งได้แยกประเภท",
      "กำหนดอายุใบสมัครเพื่อรอการชำระเงินได้",
      "สามารถล็อกเลขบิบ หรือซ่อนเลขบิบได้",
      "สามารถกำหนดให้ผู้สมัครสมัครด้วยเลขบัตรประชาชน หรืออีเมลไม่ซ้ำกัน",
      "กำหนดเงื่อนไขรุ่นอายุและแสดงผลเป็น report อัตโนมัติ",
      "สามารถเพิ่มคำถามที่ต้องการเก็บข้อมูลหรือเงื่อนไขต่างๆ ที่ต้องการให้นักวิ่งรับทราบ",
      "สามารถดาวน์โหลดข้อมูลการสมัครเป็นไฟล์ Excel",
      "เชื่อมต่อข้อมูลกับระบบสุขภาพร่วมกับสถาบันการแพทย์ฉุกเฉินแห่งชาติ (สพฉ.) เพิ่มความปลอดภัย มั่นใจในการวิ่ง",
      "มีระบบยืนยันความพร้อมการจัดงานและยืนยันตัวตนผู้จัดงาน (ThaiRun Verified)",
      "ระบบเปิดการจัดการข้อมูลของผู้ลงทะเบียนได้ด้วยตนเอง ทำให้ผู้ลงทะเบียนแก้ไขข้อมูลได้เอง ลดปัญหาการติดต่อกับแอดมินเพจ",
      "รองรับระบบรับสมัครต่างประเทศ (ค่าสกุลเงินต่างประเทศได้)",
      "ระบบหลังบ้านที่ปรับแต่งได้และฐานข้อมูลสำหรับผู้จัด",
      "สามารถดูจำนวนผู้สมัครได้ Real Time และจำนวนผู้สมัครในแต่ละวัน ในแต่ละเดือน เพื่อนำไปวิเคราะห์ข้อมูลการขายได้",
      "สามารถดูจำนวนผู้สมัครในแต่ละระยะรวมทุกตั๋ว หรือแยกประเภทได้",
      "สามารถดูจำนวนสัดส่วนผู้สมัครในแต่ละเพศ แต่ละจังหวัด",
      "สามารถดูจำนวนไซซ์เสื้อ รวมถึงจำกัดจำนวนสต๊อกทั้งหมดและแยกตามประเภทหรือระยะวิ่ง",
    ],
  },
  {
    id: 3,
    product_name: "RACE PACK",
    product_header: "THAIRUN",
    product_description:
      "ระบบที่ช่วยให้การแจกบิบและ race pack เป็นไปได้อย่างรวดเร็ว ง่ายดาย แม่นยำ สามารถช่วยยืนยันตัวตนของผู้มารับ race pack ได้อย่างรวดเร็ว ทำให้การไหลของผู้มารับ race pack เป็นไปได้อย่างรวดเร็วและแม่นยำ ลดความสับสน และทันสมัย.",
    image: "/3.png",
    path: "https://photo.thai.run/",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    id: 4,
    product_name: "MANGOMANGO",
    product_header: ".APP",
    product_description:
      "เราเป็นมากกว่าคลังภาพสำหรับงานพิเศษของคุณงานแต่งงาน งานรับปริญญา งานกีฬาประเพณี หรืองานพิเศษไหน เราก็พร้อมให้บริการคลังภาพขนาดใหญ่ตามที่คุณต้องการ พร้อมเทคโนโลยีการค้นหาภาพที่จะทำให้ผู้ร่วมงาน ประทับไจ ไม่ว่าผู้ร่วมงานของคุณจะอยู่มุมไหน ของภาพ พวกเขาจะไม่พลาดทุกวินาทีสำคัญ",
    image: "/4.png",
    path: "https://mangomango.app/",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    id: 5,
    product_name: "MEDIA",
    product_header: "THAIRUN",
    product_description:
      "ประชาสัมพันธ์งานวิ่งผ่านสื่อออนไลน์ของ ThaiRun Media ให้ไทยรันเป็นสื่อกระจายข่าวและประชาสัมพันธ์ถึงนักวิ่งอย่างทั่วถึงและตรงกลุ่มเป้าหมาย ร่วมกับ Media Partner และเซเลบนักวิ่ง Post Reach : 3,300,000 / เดือน",
    image: "/5.png",
    path: "http://fb.com/THAIDOTRUN",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    id: 6,
    product_name: "SHOP",
    product_header: "THAIRUN",
    product_description:
      "เว็บร้านค้า shop.thai.run เป็นร้านค้าออนไลน์ ที่ขายเสื้อวิ่งและผลิตภัณฑ์อื่นๆ จากพันธมิตรของเรา ผลิตภัณฑ์ สามารถเปิดร้านค้าในระบบของเรานักวิ่งที่ชำระเงิน",
    image: "/6.png",
    path: "https://shop.thai.run/",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    id: 7,
    product_name: "VIRTUAL RUN",
    product_header: "THAIRUN",
    product_description:
      "การวิ่งภายในระยะทางและวันที่ กำหนด สามารถวิ่งที่ไหนและเวลาใดก็ได้ เป็นกิจกรรมที่เพิ่มความยืดหยุ่นในการเข้าร่วมกิจกรรมการวิ่งให้มากขึ้น ในบางกิจกรรมอาจมีกฎกติกาเพิ่มเติม",
    image: "/7.png",
    path: "https://vr.thai.run/",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    id: 8,
    product_name: "TxID",
    product_header: "System",
    product_description:
      "ระบบออกใบแจ้งผลการวิ่งอย่างไม่เป็นทางการ (eSlip) ผ่าน SMS ไปยังมือถือของนักวิ่ง ทันทีที่นักวิ่งเข้าเส้นชัย.",
    image: "/8.png",
    path: "https://eslip.thai.run/",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    id: 9,
    product_name: "E-SLIP",
    product_header: " / E-CRET",
    product_description:
      "ระบบออกใบแจ้งผลการวิ่งอย่างไม่เป็นทางการ (eSlip) ผ่าน SMS ไปยังมือถือของนักวิ่ง ทันทีที่นักวิ่งเข้าเส้นชัย.",
    image: "/9.png",
    path: "https://eslip.thai.run/",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    id: 10,
    product_name: "FOLLOW",
    product_header: "ME",
    product_description:
      "ระบบซอฟต์แวร์ที่ช่วยให้แฟนคลับ เพื่อนฝูง ได้ติดตามนักวิ่งตลอดเส้นทางการวิ่ง เมื่อนักวิ่งวิ่งผ่านจุด CheckPoint ระบบจะทำการยิงภาพที่มีข้อมูลจุด CheckPoint และเวลาที่วิ่งได้ ไปที่ Line ของนักวิ่งที่มาลงทะเบียนไว้ ในช่วงก่อนการแข่งขัน นักวิ่งและเพื่อนร่วมเชียร์สามารถติดตามการแข่งขันได้อย่าง Real Time",
    image: "/IMG_9844.jpg",
    path: "https://followme.thai.run/",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    id: 11,
    product_name: "RUN",
    product_header: "X",
    product_description:
      "RUNX เป็นระบบแสดงผลการวิ่งของนักวิ่งแต่ละคนตามข้อมูลผลการวิ่งในแต่ละสนาม ระบบสามารถช่วยคิด Running Score และรวบรวมผลการแข่งขันของนักวิ่งไว้ที่จุดเดียว ออกแบบมาเพื่อให้นักวิ่งสามารถติดตามและวิเคราะห์ผลการแข่งขันได้อย่างง่ายดายและเป็นระบบมากขึ้น เพียงแค่ค้นหาชื่อของตัวเอง",
    image: "/IMG_9839.jpg",
    path: "http://www.runx.run/",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    id: 12,
    product_name: "RACE",
    product_header: "EMR",
    product_description:
      "ระบบซอฟต์แวร์ที่ช่วยให้การบริหารงานการแพทย์สนามได้ง่ายขึ้น แพทย์อาสาใช้เพียงมือถือในการช่วยบันทึกเหตุการณ์ด้านการแพทย์ และส่งข้อมูลเข้าศูนย์กลางการแพทย์สนาม พร้อมข้อมูล GPS location ณ จุดเกิดเหตุ และมีฟังก์ชันในการช่วยจัดการโรงพยาบาลสนาม เช่น พร้อมระบบเตียง ระบบจัดการผู้ป่วย เป็นต้น",
    image: "/IMG_9843.jpg",
    path: "https://www.raceemr.com/lander",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    id: 13,
    product_name: "PICK PACK",
    product_header: "POST",
    product_description:
      "บริการช่วยหยิบ แพ็ค และส่งไปรษณีย์ (Fulfillment service) เพิ่มความสะดวกในการจัดงานวิ่ง ให้ผู้จัดไม่ต้องวุ่นวายกับความผิดพลาดจากการหยิบเสื้อ หยิบบิบ พิมพ์ลาเบลหน้าซอง แปะลาเบล จัดเสื้อบิบเข้าซอง มีบริการพื้นที่จัดเก็บสินค้าอย่างปลอดภัย แพ็คสินค้า และบริการจัดส่งสินค้าอย่างครบวงจร",
    image: "/IMG_9841.jpg",
    path: "https://www.raceemr.com/lander",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    id: 14,
    product_name: "VAP",
    product_header: "THAIRUN",
    product_description:
      "กิจกรรมส่งเสริมการดูแลสุขภาพ ให้กับบุคลากรของคุณ กิจกรรมกลุ่ม ในรูปแบบ New Normal ถึงอยู่ไกล แต่ใจเราใกล้กันสมาชิกในองค์กรสามารถเข้าร่วมกิจกรรมได้ทุกที่ ทุกเวลา เข้าร่วมกิจกรรมพร้อมกันได้หลายคนผ่านอุปกรณ์สมาร์ทโฟน สนับสนุนทุกระบบปฏิบัติการ iOS และ Android",
    image: "/IMG_9845.jpg",
    path: "https://vap.thai.run/",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    id: 15,
    product_name: "READ",
    product_header: "THAIRUN",
    product_description:
      "สำนักข่าวไทยรันจัดการเรื่องวิ่ง จัดทำเรื่องสั้นนักวิ่ง โค้ชส่วนตัวของคุณ อ่านได้เลยที่นี่",
    image: "/IMG_9840.jpg",
    path: "https://read.thai.run/",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    id: 16,
    product_name: "WHERE",
    product_header: "THAIRUN",
    product_description:
      "ศูนย์รวมสถานที่วิ่ง สามารถค้นหากิจกรรมงานวิ่ง ข้อมูล รูปและความคิดเห็นจากสมาชิกคนอื่น ๆ  อ่านได้เลยที่นี่",
    image: "/IMG_9838.jpg",
    path: "https://marathon.thai.run/",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
];
