import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import './AboutPage.scss';

const AboutPage = () => (
  <div>
    <Navigation />
    <div className="aboutPage_container">
      <div className="aboutPage_info">
        <div>
          <p className="aboutPage_text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores blanditiis commodi consequatur corporis dicta dolor esse fugiat, inventore ipsum, laboriosam magni non reprehenderit sapiente sed sequi tempora unde voluptatibus! Ab accusamus, accusantium amet at beatae et explicabo illum maiores non odio perspiciatis quae quaerat quia soluta, sunt suscipit tenetur, voluptatibus! Ad aliquam aspernatur beatae blanditiis consectetur consequuntur
          </p>
          <p className="aboutPage_text">Corporis deserunt dolor dolorum eos esse excepturi expedita in ipsa libero maiores modi mollitia nihil officia pariatur possimus provident qui quia quibusdam quis ratione rem sed ullam unde ut, vel veritatis vitae voluptas! Aliquam cupiditate expedita facilis id laboriosam nemo, odit placeat quasi qui quibusdam repellat rerum suscipit vero. Asperiores cupiditate debitis, delectus dolorum et, exercitationem facere fuga fugit libero molestiae mollitia </p>
          <p className="aboutPage_text">Necessitatibus officiis quas quisquam repellat repudiandae sed ullam voluptates! Alias atque consectetur deserunt, dolorum eaque eligendi, eveniet ex expedita explicabo fugit impedit inventore iste labore laudantium minima modi mollitia numquam provident quasi qui quisquam sint suscipit, tempore totam velit vero voluptatem. Accusantium asperiores assumenda cumque delectus dicta dolor libero quia tenetur voluptatem. Ab, adipisci amet autem consequatur cumque dolorem enim eveniet ex explicabo ipsa iure maiores nam natus necessitatibus neque nesciunt nostrum odio omnis praesentium rem repellat repudiandae sapiente similique veniam veritatis voluptate voluptatem? Alias aliquam aspernatur atque consequatur debitis deleniti dignissimos dolor dolore et, eveniet facere impedit ipsa </p>
        </div>

        <div>
          <img className="aboutPage_image" src="https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2012/10/Multicoloured-macaroons.jpg" alt="macaroons" width={600} />
        </div>
      </div>

      <div className="aboutPage_contacts">
        <button> E-mail Me</button>
      </div>

    </div>
  </div>
);

export default AboutPage;
