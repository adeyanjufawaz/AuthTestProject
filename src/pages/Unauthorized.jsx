import React from 'react'
import { Link } from 'react-router-dom';

function Unauthorized() {
  return (
    <div className="flex justify-center items-center gap-6 p-6 flex-col">
      <h2>Unauthorized User</h2>
      <h3>Log in to Access this Page</h3>
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
      </p>
      <Link to="/admin" className="bg-red-600 px-5 py-2">
        Submit
      </Link>
    </div>
  );
}

export default Unauthorized