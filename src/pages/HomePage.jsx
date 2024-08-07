import React from 'react'
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="flex justify-center items-center gap-6 p-6 flex-col">
      <h2>Home Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
        officia, minima fugiat culpa voluptas nobis rerum ullam itaque
        dignissimos perferendis animi, numquam provident ipsum excepturi
        eveniet. Quod natus velit eos temporibus, voluptatibus neque id, libero
        vitae fugiat, dolore porro optio. Cupiditate iusto, aliquid hic
        temporibus eaque inventore eius labore perspiciatis eveniet ut
        doloremque, blanditiis dolores quis eos. Commodi repellat consectetur
        quo, repudiandae assumenda sequi, voluptates eum magnam voluptatibus
        doloremque perferendis ut nihil quaerat culpa beatae officia maiores
        eveniet debitis molestiae laudantium dicta, molestias possimus ratione
        iusto? Neque saepe iusto quisquam ratione eaque architecto quaerat ex
        quidem dolorum! Fugiat illo, quas beatae repellendus non aliquam
        explicabo maxime pariatur dolore quibusdam, magni eveniet amet
        recusandae porro architecto repellat ducimus at ut quasi labore harum?
        Consectetur quibusdam, explicabo sit labore dicta beatae dolores
        distinctio quis ipsum saepe, nesciunt blanditiis reiciendis illo
        voluptate delectus magni pariatur non velit, commodi accusantium in!
        Voluptas, doloremque cumque.
      </p>
      <Link to="/admin" className="bg-red-600 px-5 py-2">Admin Page</Link>
    </div>
  );
}

export default HomePage