import React from 'react'

export default function Main() {
  return (
    <>
     <main>
    <article>
{/* import hero-banner.jpg image for html seaction*/}





      <section className="section hero has-before has-bg-image" id="home" aria-label="home"
         style={{ backgroundImage: 'url(../../../../assets/images/hero-banner.jpg)' }}>
        <div className="container">

          <h1 className="h1 hero-title">صالون الاخوين</h1>

          <p className="hero-text">
         نقدم لعملائنا خدمات متنوعة من: تصفيف الشعر ، اللحية ، العناية بالوجه ، العناية بالوجه ، باديكير ، مانيكير ،كل شيء موجود من أجلكم أيها السادة.

          </p>

          <a href="./" className="btn has-before">
            <span className="span">اكتشف خدماتنا</span>

            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </a>

        </div>
      </section>





      <section className="section service" id="services" aria-label="services">
        <div className="container">

          <h2 className="h2 section-title text-center">الخدمة التي نقدمها</h2>

          <p className="section-text text-center">
          
          </p>

          <ul className="grid-list">


            <li>
              <div className="service-card">

                <div className="card-icon">
                  <i className="flaticon-shampoo"></i>
                </div>

                <h3 className="h3">
                  <a href="./" className="card-title"> تصفيف الشعر</a>
                </h3>

                <p className="card-text">
                  اكتشف مجموعات العناية بالشعر Man's Beard Morocco ، المصنوعة من مكونات طبيعية ومصنوعة في فرنسا. من الشامبو الصلب إلى مقابض الشعر ، من خلال المنتجات المختلفة التي تتكيف مع نوع شعرك ، دلل نفسك بأفضل عناية بالشعر.

                </p>

                <a href="./" className="card-btn" aria-label="more">
                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>

              </div>
            </li>

        

            <li>
              <div className="service-card">

                <div className="card-icon">
                  <i className="flaticon-shaving-razor"></i>
                </div>

                <h3 className="h3">
                  <a href="./" className="card-title">عناية الوجه
                  </a>
                </h3>

                <p className="card-text">
                  لقد تخيلت Man's Beard مجموعة متكاملة مخصصة للرجال. اكتشف علاجات الجسم والوجه المكونة أساسًا من عوامل طبيعية نشطة ، مصنوعة في فرنسا.

                </p>

                <a href="./" className="card-btn" aria-label="more">
                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>

              </div>
            </li>

            <li>
              <div className="service-card">

                <div className="card-icon">
                  <i className="flaticon-hair-dye"></i>
                </div>

                <h3 className="h3">
                  <a href="./" className="card-title">صباغة الشعر</a>
                </h3>

                <p className="card-text">
                  ظافة مثالية لضمان مظهر نظيف وأنيق بفضل منتجات تنظيف اللحية من Man's ، المصممة بمكونات طبيعية نشطة مثل الألوفيرا أو زيت الخروع ، يمكنك غسل لحيتك وضمان نعومتها وتألقها.
                </p>

                <a href="./" className="card-btn" aria-label="more">
                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>

              </div>
            </li>

          </ul>

        </div>
      </section>






      <section className="section pricing has-bg-image has-before" id="pricing" aria-label="pricing"
         style={{ backgroundImage: 'url(../../../../assets/images/pricing-bg.jpg)' }}>
        <div className="container">

          <h2 className="h2 section-title text-center">  جدول الاسعار   </h2>

          <p className="section-text text-center">
      

          </p>

          <div className="pricing-tab-container">

            <ul className="tab-filter">

              <li>
                <button className="filter-btn active" data-filter-btn="all">
                  <div className="btn-icon">
                    <i className="flaticon-beauty-salon" aria-hidden="true"></i>
                  </div>

                  <p className="btn-text">كل  الاسعار</p>
                </button>
              </li>

        

              <li>
                <button className="filter-btn" data-filter-btn="face-washing">
                  <div className="btn-icon">
                    <i className="flaticon-spa" aria-hidden="true"></i>
                  </div>

                  <p className="btn-text">غسل الوجه</p>
                </button>
              </li>

           

              <li>
                <button className="filter-btn" data-filter-btn="shaving">
                  <div className="btn-icon">
                    <i className="flaticon-razor-blade" aria-hidden="true"></i>
                  </div>

                  <p className="btn-text"> قص او تدريج اللحية</p>
                </button>
              </li>

            </ul>

            <ul className="grid-list">

              <li data-filter="shaving">
                <div className="pricing-card">

                  <figure className="card-banner img-holder" style="--width: 90; --height: 90;">
                    <img src="./assets/images/pricing-1.jpg" width="90" height="90" alt="قص الشعر
 & Fitting"
                      className="img-cover"/>
                  </figure>

                  <div className="wrapper">
                    <h3 className="h3 card-title"> قص الشعر
                    </h3>

                    <p className="card-text">نظيفة وبسيطة 30-40 دقيقة
                    </p>
                  </div>

                  <data className="card-price" value="89">20MAD</data>

                </div>
              </li>

              <li data-filter="shaving">
                <div className="pricing-card">

                  <figure className="card-banner img-holder" style="--width: 90; --height: 90;">
                    <img src="./assets/images/pricing-2.jpg" width="90" height="90" alt="Shaving & Facial"
                      className="img-cover"/>
                  </figure>

                  <div className="wrapper">
                    <h3 className="h3 card-title">الحلاقة والوجه
                    </h3>

                    <p className="card-text">نظيفة وبسيطة 30-40 دقيقة
                    </p>
                  </div>

                  <data className="card-price" value="45">30MAA</data>

                </div>
              </li>

              <li data-filter="face-washing">
                <div className="pricing-card">

                  <figure className="card-banner img-holder" style="--width: 90; --height: 90;">
                    <img src="./assets/images/pricing-3.jpg" width="90" height="90" alt="Hair Color & Wash"
                      className="img-cover"/>
                  </figure>

                  <div className="wrapper">
                    <h3 className="h3 card-title">صبغ الشعر وغسله
                    </h3>

                    <p className="card-text">نظيفة وبسيطة 30-40 دقيقة
                    </p>
                  </div>

                  <data className="card-price" value="35">20MAD</data>

                </div>
              </li>


              <li data-filter="face-washing">
                <div className="pricing-card">

                  <figure className="card-banner img-holder" style="--width: 90; --height: 90;">
                    <img src="./assets/images/pricing-6.jpg" width="90" height="90" alt="Facial & Face Wash"
                      className="img-cover"/>
                  </figure>

                  <div className="wrapper">
                    <h3 className="h3 card-title">غسول الوجه  
                    </h3>

                    <p className="card-text">نظيفة وبسيطة 30-40 دقيقة
                    </p>
                  </div>

                  <data className="card-price" value="63">20MAD</data>

                </div>
              </li>

              
            </ul>

          </div>

        </div>
      </section>
      <section className="section gallery" id="gallery" aria-label="photo gallery">
        <div className="container">

          <div className="title-wrapper">

            <div>
              <h2 className="h2 section-title">أحدث معرض للصور
              </h2>

              <p className="section-text">
           
              </p>
            </div>

            <a href="./" className="btn has-before">
              <span className="span">اكتشف المزيد من الصور</span>

              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </a>

          </div>

          <ul className="grid-list">

            <li>
              <div className="gallery-card">

                <figure className="card-banner img-holder" style="--width: 422; --height: 550;">
                  <img src="./assets/images/gallery-1.jpg" width="422" height="550" loading="lazy" alt="قص الشعر
"
                    className="img-cover"/>
                </figure>

                <div className="card-content">

                  <h3 className="h3 card-title">قص الشعر
</h3>

                  <p className="card-text">AL AKHAWAYN Services</p>

                  <a href="./" className="card-btn" aria-label="Read more">
                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                  </a>

                </div>

              </div>
            </li>

            <li>
              <div className="gallery-card">
                <figure className="card-banner img-holder" style="--width: 422; --height: 550;">
                  <img src="./assets/images/gallery-2.jpg" width="422" height="550" loading="lazy" alt="قص الشعر " className="img-cover"/>
                </figure>

                <div className="card-content">

                  <h3 className="h3 card-title">تدريج اللحية 
</h3>

                  <p className="card-text"> AL AKHAWAYN
                      Services</p>

                  <a href="./" className="card-btn" aria-label="Read more">
                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                  </a>

                </div>

              </div>
            </li>

            <li>
              <div className="gallery-card">

                <figure className="card-banner img-holder" style="--width: 422; --height: 550;">
                  <img src="./assets/images/gallery-3.jpg" width="422" height="550" loading="lazy" alt=" تدريج الشعر
"
                    className="img-cover"/>
                </figure>

                <div className="card-content">

                  <h3 className="h3 card-title"> تدريج الشعر
</h3>

                  <p className="card-text">AL AKHAWAYN
                      Services</p>

                  <a href="./" className="card-btn" aria-label="Read more">
                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                  </a>

                </div>

              </div>
            </li>

            <li>
              <div className="gallery-card">

                <figure className="card-banner img-holder" style="--width: 422; --height: 550;">
                  <img src="./assets/images/gallery-4.jpg" width="422" height="550" loading="lazy" alt="قص الشعر
"
                    className="img-cover"/>
                </figure>

                <div className="card-content">

                  <h3 className="h3 card-title">قص الشعر
</h3>

                  <p className="card-text">AL AKHAWAYN Services</p>

                  <a href="./" className="card-btn" aria-label="Read more">
                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                  </a>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>





 

      <section className="section appoin" id="appointment" aria-label="appointment">
        <div className="container">

          <div className="appoin-card">

            <figure className="card-banner img-holder" style="--width: 250; --height: 774;">
              <img src="./assets/images/appoin-banner-1.jpg" width="250" height="774" loading="lazy" alt=""
                className="img-cover"/>
            </figure>

            <div className="card-content">

              <h2 className="h2 section-title">حجز موعد</h2>

              <p className="section-text">
                إحجز موعد من خلال ملئ الاستمارة
              </p>

              <form action="" className="appoin-form">

                <div className="input-wrapper">
                  <input type="text" name="name" placeholder="اسمك الكامل " required className="input-field"/>

                  <input type="email" name="email_address" placeholder="عنوان البريد الالكترونى" required className="input-field" /> </div>

                <div className="input-wrapper">
                  <input type="text" name="phone" placeholder="هاتف " required className="input-field"/>

                  <select name="category" className="input-field">

                    <option value="Select category">اختر الفئة
                    </option>
              
                    <option value="Shaving & Facial">  حلاقةالوجه
                    </option>
                    <option value=" صباغة الشعر">صباغة الشعر</option>
                    <option value=" صباغة الشعر"> قص او تدريج الحية</option>

                  </select>
                </div>

                <input type="date" name="date" required className="input-field date"/>

                <textarea name="message" placeholder="اكتب رسالة
                " required className="input-field"></textarea>

                <button type="submit" className="form-btn">
                  <span className="span">احجز الان</span>

                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </button>

              </form>

            </div>

            <figure className="card-banner img-holder" style="--width: 250; --height: 774;">
              <img src="./assets/images/appoin-banner-2.jpg" width="250" height="774" loading="lazy" alt=""
                className="img-cover"/>
            </figure>

          </div>

        </div>
      </section>

    </article>
  </main>

    </>
  )
}
