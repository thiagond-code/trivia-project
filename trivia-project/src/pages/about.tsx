import Image from 'next/image'

const date = new Date()
const today = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()

export default function About() {
    return (
        <main className="flex flex-col items-center">
            <section className="flex flex-col prose mx-8">
                <article className="flex flex-col items-center">
                    <h1>About the Quiz</h1>
                    <small className="-mt-4 mb-8">Written in {today}</small>
                    <div className="prose">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Officiis, velit! Enim error officia corporis
                            praesentium fugiat in, rerum incidunt placeat,
                            eaque, laudantium amet alias inventore! Ut nostrum
                            numquam et expedita.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Explicabo aliquam ipsam unde corrupti modi
                            dignissimos cum fuga consectetur recusandae. Autem
                            obcaecati amet molestiae aspernatur repudiandae!
                            Accusantium explicabo quo exercitationem impedit!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Molestiae, commodi nulla suscipit, tempora
                            nobis impedit reiciendis vel quas optio, neque
                            cupiditate nam doloribus aspernatur voluptatum
                            veritatis et saepe dolorem dolor?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Iusto doloribus atque, dolorem at iure velit
                            officiis dolor pariatur culpa nostrum similique
                            saepe, eius odio perferendis sequi rerum earum
                            temporibus sunt?
                        </p>
                        <p>
                            Omnis, ut! Animi fugit nesciunt, asperiores,
                            voluptate eos nemo sunt, culpa necessitatibus
                            incidunt quam eum dicta praesentium at ut! Optio
                            unde officiis necessitatibus ullam qui, assumenda
                            laborum nemo aliquid minus.
                        </p>
                        <p>
                            Alias ex atque laudantium dicta, rem necessitatibus
                            consectetur incidunt. Iste impedit autem tempora
                            commodi? Ipsam tenetur aliquid consequuntur impedit.
                            Eum, dicta. Optio reprehenderit numquam quidem,
                            harum sed nostrum vel illo.
                        </p>
                    </div>
                </article>
                <div className="flex items-center gap-2">
                    <img
                        className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        width={100}
                        height={100}
                        alt=""
                    />
                    <p className='font-medium'>Thiago Nogueira Dias</p>
                </div>
            </section>
        </main>
    )
}
