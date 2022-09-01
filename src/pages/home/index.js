import React from 'react'
import OurWorks from './sections/OurWorks';
import Reviews from './sections/Reviews';

const Home = () => {
    const descriptionTextWorks = 'Фото с комплектом "Кармен": в уютной квартире семьи Сергея и Татьяны не хватало акцентного элемента, который одновременно подчеркивал бы характер хозяев, а также украшал интерьер. В реализации идеи были использованы такие материалы как канвас и тюль сетка, а цвета подобраны под смелый запрос хозяев – красный и молочный.';
    const descriptionTextReviews = '“Если хочется почувствовать себя дизайнером, то вам определенно в «Зашторим»! Уникальность конструктора штор поражает и убирает неудобства, вызванные при заказе стандартных готовых штор: не подошел цвет, высота и ширина, крепление к карнизу и пр. В общем, всем рекомендую!”';
    const user = 'Галина';
    const location = 'г.Могилёв, Беларусь'

    return (
        <>
            <OurWorks descriptionText={descriptionTextWorks} />
            <Reviews
                user={user}
                location={location}
                descriptionText={descriptionTextReviews}

            />
        </>

    )
}
export default Home;