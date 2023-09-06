const places=[
    {
        id: 1,
        name: "اورامانات",
        description: " روستای اورامان در استان کردستان از دهکده‌های تاریخی و زیبای کشور است که پیشینه ای هزارساله دارد. اورامان که به هورامان یا اورامانات تخت هم شهرت دارد از زیبا‌ترین مناطق کوهستانی ایران است و جنگل های بزرگ و سرسبزی دارد. منطقه اورامان بین ایران و عراق مشترک است و با داشتن دشت‌ها و رودهای زیبا از کردنشین های زیبای غرب کشور به حساب می آید. اورامان به دلیل داشتن معماری پلکانی، اغلب با روستای ماسوله گیلان مقایسه می شود و به روستای هزارماسوله هم شهره است.",     
        src: "images/oraman.jpg",
    },
    {
        id: 2,
        name: "پالنگان",
        description: "روستای پالنگان حدود دو ساعت با شهر سنندج فاصله دارد و برای رسیدن به آن باید وارد شده جاده سنندج به کرمانشاه شده و به سمت کامیاران حرکت کنید. بعد از خیابان بهشتی کامیاران در مسیر دهستان ژاورود قرار بگیرید و به دره زیبایی که تنگیور نام دارد برسید. در این روستای زیبا علاوه بر دیدن مناطق بکر کردستان، می‌توانید با فرهنگ و رسوم مردم این منطقه نیز آشنا شوید.",
        src: "images/palngan.jpg"
    },
    {
        id: 3,
        name: "غار کرفتو",
        description: "برخلاف سایر غارهای استان کردستان، غار کرفتو ساخته دست انسان می‌باشد و هنوز هم برای ما مشخص نیست که سازنده این غار دقیقاً در چه زمانی زندگی می‌کرده و چه کسی بوده است. در این غار یک کتیبه به زبان یونانی پیدا شده و به همین دلیل بسیاری بر این باورند که آنجا محل دفن هرکول است. البته باید در نظر داشته باشید که این ادعا صرفاً بر اساس افسانه‌های محلی است و اعتبار ندارد. بررسی‌های انجام شده نشان دهنده این است که این غار در قرن ۳ میلادی ساخته شده و دهانه آن در ارتفاع ۱۵ متری یک دیوار عمودی سنگی می‌باشد",
        src: "images/karaftoo.jpg"
    },
    {
        id: 4,
        name: "دریاچه زریوار",
        description: "دریاچه زریوار یا زریبار (در زبان کردی) در مریوان از جمله نقاط گردشگری استان کردستان است. شهرستان مریوان در فاصله ۱۲۵ کیلومتری شمال غربی سنندج واقع شده‌است. مریوان با برخورداری از مناطق جنگلی، مرز رسمی باشماق و دریاچه زریوار، روحیه شاد و مهمان‌پذیر مردم و به علت همجواری با منطقه طبیعت گردی به یکی از نقاط مورد هدف گردشگران داخلی و خارجی تبدیل شده‌است.",
        src: "images/zribar.jpg"
    },
    {
        id: 5,
        name: "عمارت خسرو آباد",
        description: "قدمت عمارت خسروآباد به دوران قاجار و سال ۱۲۲۳ هجری قمری باز‌می‌گردد. امان الله خان اردلان والی، حاکم وقت کردستان دستور ساخت این بنا را با ۶۰۰۰ متر مربع مساحت صادر کرد. البته برخی اعتقاد دارند بخش شرقی بنا که قصر نامیده می‌شود، در دوران زندیه ساخته شده است و توسعه‌ آن را به امان الله خان اردلان والی نسبت می‌دهند. با اینکه این عمارت گاهی به‌عنوان مقر حکومتی سیاسی و نظامی استفاده می‌شد؛ اما بیشتر به‌عنوان محلی برای انجام مراسم‌های تشریفاتی و استقبال از شاهان کاربرد داشت؛ به‌طوری که حتی مراسم عروسی حسن جهان خانم، دختر فتحعلی شاه با پسر امان الله خان در این عمارت صورت پذیرفت.",
        src: "images/khosro.jpg"
    }
]

let current_img = document.querySelector(".current-img");
let image_title = document.querySelector(".image-title");
let image_desc = document.querySelector(".image-desc");
document.getElementById("oraman").onclick = function(){
    current_img.src = places[0].src;
    image_title.innerHTML = places[0].name;
    image_desc.innerHTML = places[0].description;

}
document.getElementById("palngan").onclick = function(){
    current_img.src=places[1].src;
    image_title.innerHTML = places[1].name;
    image_desc.innerHTML = places[1].description;
}
document.getElementById("karaftoo").onclick = function(){
    current_img.src=places[2].src;
    image_title.innerHTML = places[2].name;
    image_desc.innerHTML = places[2].description;
}
document.getElementById("zribar").onclick = function(){
    current_img.src = places[3].src;
    image_title.innerHTML = places[3].name;
    image_desc.innerHTML = places[3].description;
}
document.getElementById("khosro").onclick = function()
{
    current_img.src = places[4].src;
    image_title.innerHTML = places[4].name;
    image_desc.innerHTML = places[4].description;
}











