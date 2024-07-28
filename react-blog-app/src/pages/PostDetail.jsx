import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import Thumnail from '../assets/blog22.jpg'

const PostDetail = () => {
    return (
        <section className="post-detail">
            <div className="container post-detail_container">
                <div className="post-detail_header">
                    <PostAuthor />
                    <div className="post-detail_buttons">
                        <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
                        <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
                    </div>
                </div>
                <h1>This is the post title!</h1>
                <div className="post-detail_thumnail">
                    <img src={Thumnail} alt="" />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione amet,sit sed aspernatur accusamus doloribus corrupti quaerat aperiam iusto,
                    inventore quas ad tempora alias molestiae velit pariatur dolore quo omnis nesciunt laudantium excepturi minus ullam commodi veritatis! Placeat,
                    blanditiis enim.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, tenetur nulla incidunt reprehenderit ex autem dicta temporibus fuga sequi eos ea,
                    illum consectetur magni voluptatibus ut libero ullam pariatur similique quos labore nisi itaque optio.
                    Officiis nobis quidem a eligendi perferendis suscipit deleniti officia reiciendis,
                    molestiae tempore porro et inventore hic quas vitae. Dolore, maiores?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatum exercitationem autem? Corrupti,
                    nihil ab quod doloribus quos asperiores quaerat quae accusantium facere, eaque, cumque laboriosam consectetur minima?
                    Tempora soluta hic suscipit natus doloremque assumenda! Culpa voluptates illo sit aliquam ipsa magnam,
                    mollitia eligendi molestias distinctio amet quod ea fugit quibusdam quaerat sequi blanditiis veniam voluptatibus deleniti nesciunt
                    expedita pariatur totam? Repellat nam eum reprehenderit incidunt dicta eveniet asperiores dolorem tenetur recusandae odit a esse eius,
                    illum necessitatibus. Exercitationem culpa molestias vel deleniti qui distinctio doloremque alias laboriosam officia dolores temporibus ex,
                    blanditiis possimus quasi ab. Consequuntur tempora officiis ex est,
                    accusamus mollitia odit reprehenderit explicabo architecto, possimus labore, illo laboriosam!</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis recusandae fuga tempora,
                    deserunt iure maiores commodi, architecto, nam inventore magnam.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusamus necessitatibus numquam deleniti ad hic recusandae
                    culpa cumque iusto exercitationem, officia consectetur, quod incidunt, eos quo. Nisi officia fugiat neque atque,
                    rem voluptatem consequatur totam ut quod libero sit nemo quaerat sed possimus explicabo doloribus quam placeat asperiores!
                    Nobis quisquam facere molestiae rem nesciunt error nihil officiis neque, suscipit eveniet voluptatum magni architecto totam
                    earum nisi, atque ad repellendus tenetur? Tenetur ad ullam aperiam repudiandae culpa at eius quod earum cumque vitae!
                    Sint at dolorum vero ad eligendi unde veniam ipsa debitis quo cupiditate perspiciatis beatae rerum id quibusdam commodi
                    laboriosam pariatur hic temporibus soluta ratione, quos sit, optio odit. Harum similique sequi vel cum accusamus ex,
                    ea aut itaque aliquam, modi rem! Non, corrupti perspiciatis nisi est quisquam laudantium ex ut expedita.
                    Autem omnis deleniti delectus officiis in ducimus iste at! At inventore odit voluptatem veniam iste magnam molestiae,
                    repudiandae ab, amet ratione consectetur, corrupti ipsum excepturi! Deserunt animi, nisi suscipit quod a fuga accusantium,
                    quas placeat dolore quasi soluta, velit iure laborum aliquid culpa rem hic porro laudantium cupiditate esse commodi
                    aperiam corrupti id labore. Minus nesciunt asperiores sunt exercitationem ipsum nulla tempore voluptas officia sit?
                    Delectus, et.</p>
            </div>

        </section>
    )
}

export default PostDetail;