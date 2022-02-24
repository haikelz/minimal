import Image from './Image';

export default function Contact() {
  return (
    <section>
      <h1>Contact</h1>
      <p>Temukan saya di: </p>

    <div className="contact">
      <li><a href="https://github.com/haikelz">Github</a></li>
      <li><a href="mailto:haikelz@my.id">Email</a></li>
      <li><a href="https://haikelz.me">Blog</a></li>
    </div>

    <Image width="50px" />
    </section>
  );
}
