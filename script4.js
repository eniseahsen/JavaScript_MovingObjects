// İlk kutuyu hareket ettirirken kullanılacak değişkenler
let box1= document.getElementById("box1");
let isBox1Dragging = false; //isBox1Dragging nesnesinin başlangıç değeri false olsun (sürüklenme durumu için)
let offsetX1, offsetY1; //offsetX1 ve offsetY1 değişkenleri genellikle bir nesnenin sürüklendiği veya tıklandığı andaki başlangıç konumunu tutmak için kullanılır. 

//ikinci kutuyu hareket ettirmek için
let box2 = document.getElementById("box2");
let isBox2Dragging = false;
let offsetX2, offsetY2;

// fare tıklaması için
box1.addEventListener("mousedown",(e) => { //"box1" adlı nesneye bir olay dinleyicisi ekler. Olay dinleyicisi, "mousedown" olayı gerçekleştiğinde (fare tıklaması başladığında) çalışacak olan anonim (ok işaretiyle belirtilen) işlevi içerir.
    isBox1Dragging =true;   //sürüklenmeyi başlatmak için true                                      //Buradaki (e) parametresi, olay nesnesini temsil eder. "mousedown" olayı gerçekleştiğinde, tarayıcı bu olayı tetikler ve olayla ilgili bilgileri içeren bir olay nesnesi oluşturur. (e) parametresi, bu olay nesnesini temsil eder ve bu işlev içinde olayla ilgili bilgileri kullanmamıza izin verir.
    offsetX1 = e.clientX - box1.getBoundingClientRect().left;  //offsetX1 adlı bir değişkene fare imleci ile "box1" nesnesinin sol kenarı arasındaki yatay mesafeyi (farkı) hesaplar. e.clientX fare imlecinin yatay koordinatını verir ve box1.getBoundingClientRect().left "box1" nesnesinin sol kenarının yatay koordinatını verir. 
    offsetY1 = e.clientY - box1.getBoundingClientRect().top; //getboundingClientRect: nesnenin konumunu tutar
}); //başlangıç konumu           

box2.addEventListener("mousedown", (e) => {
    isBox2Dragging = true;
    offsetX2 = e.clientX - box2.getBoundingClientRect().left;
    offsetY2 = e.clientY - box2.getBoundingClientRect().top;
});  //e.clientX fare imlecinin yatay koordinatını verir
     //e.clientY fare imlecinin dikey koordinatını verir
     //offsetY1 ise "box1" nesnesinin sürüklemeye başladığı andaki dikey konumunu tutar.

// fare tıklaması bittiğinde kutuyu sürükleme olayı
document.addEventListener("mouseup", () =>{  //tıklama olmadığında sürüklemeyi bırakıyor
    isBox1Dragging = false;
    isBox2Dragging = false;
});

// fare hareket ederken kutuyu sürükleme olayı
document.addEventListener("mousemove", (e) => {
    if(isBox1Dragging){
        box1.style.left = e.clientX - offsetX1 + "px";
        box1.style.top = e.clientY - offsetY1 + "px";
    }

    if(isBox2Dragging){
        box2.style.left = e.clientX - offsetX2 + "px";
        box2.style.top = e.clientY - offsetY2 + "px";
    }
});

//box1.style.top = e.clientY - offsetY1 + "px";: Bu satır, "box1" nesnesinin dikey (y) stil özelliğini, fare imleci hareketine göre günceller. e.clientY fare imlecinin dikey koordinatını verir ve offsetY1 ise "box1" nesnesinin sürüklemeye başladığı andaki dikey konumunu tutar. Böylece, box1 nesnesi fare imleci hareketine göre dikey yönde hareket eder.

