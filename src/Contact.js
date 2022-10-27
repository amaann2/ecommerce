import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 3rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 2rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      
      <h2 className="common-heading">Contact page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1834168034957!2d72.91444121418031!3d19.099607856194957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7cb91a08e4b%3A0x10408c61181384c3!2sR%20City%20Mall!5e0!3m2!1sen!2sin!4v1666881035320!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mzbwjjok" method="post" className="contact-inputs">
            <input type="text" name="username" required placeholder="username"  autoComplete="off"/>
            <input type="email" name="email" placeholder="email" required  autoComplete="off"/>
            <textarea name="Message" placeholder="Enter your Message" cols="30" rows="10" required autoComplete="off"></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
