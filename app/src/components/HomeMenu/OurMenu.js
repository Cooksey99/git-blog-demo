import './OurMenu.css';

export default function OurMenu() {


    return (
        <>
            <section class="our-menu">
                <div>
                    <h1>Our Menu</h1>
                    <p>Stop by and experience our quality Ethiopian, Brazilian, and Italian roasts. We offer gluten-free, dairy-free, and vegan foods on our menu to satisfy any special dietary flneeds.</p>
                </div>
                <div class="menu-sections">
                    <ul class="specialty">
                        <img src="https://raw.githubusercontent.com/Cooksey99/ahadu-coffee/master/img/latte-art.jpg" alt="latte" />
                            <h3>Specialty drinks</h3>
                            <p>Try our "Ahadu Special" or any of our other delicious custom drinks. They'll become your new favorite!</p>
                    </ul>
                    <ul>
                        <img src="https://raw.githubusercontent.com/Cooksey99/ahadu-coffee/master/img/pastery-food.jpg" alt="treats" />
                            <h3>Treats</h3>
                            <p>If you're on the go, grab a bagel! Or stay to savor some of our homemade sweet cakes or muffins.</p>
                    </ul>
                    <ul>
                        <img src="https://raw.githubusercontent.com/Cooksey99/ahadu-coffee/master/img/espresso-shot.jpeg" alt="espresso" />
                            <h3>Espresso</h3>
                            <p>Uncover the rich depth of our fine Italian espresso, made to order by baristas who know their stuff!</p>
                    </ul>
                </div>
                <button>View Full Menu</button>
            </section>
        </>
    )
}
