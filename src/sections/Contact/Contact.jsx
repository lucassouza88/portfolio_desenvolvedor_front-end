import Section from '../../components/Section/Section.jsx';
import SocialLinks from '../../components/SocialLinks/SocialLinks.jsx';
import Button from '../../components/Button/Button.jsx';
import FormField from '../../components/FormField/FormField.jsx';
import { profile } from '../../data/profile.js';
import { useContactForm } from '../../hooks/useContactForm.js';
import styles from './Contact.module.css';

const statusMessages = {
  success: 'Obrigado! Sua mensagem foi encaminhada.',
  error: 'Não foi possível enviar agora. Tente novamente ou use os links ao lado.',
};

/** Seção "Contato": formulário validado e links para redes profissionais. */
export default function Contact() {
  const { values, errors, status, handleChange, handleSubmit } = useContactForm(profile.email);

  return (
    <Section
      id="contato"
      eyebrow="Contato"
      title="Vamos conversar?"
      subtitle="Tem uma vaga, um projeto ou só quer trocar uma ideia? Envie uma mensagem ou me encontre nas redes."
    >
      <div className={styles.grid}>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <FormField
            label="Nome"
            name="name"
            value={values.name}
            error={errors.name}
            onChange={handleChange}
            autoComplete="name"
          />
          <FormField
            label="E-mail"
            name="email"
            type="email"
            value={values.email}
            error={errors.email}
            onChange={handleChange}
            autoComplete="email"
          />
          <FormField
            label="Mensagem"
            name="message"
            as="textarea"
            rows={5}
            value={values.message}
            error={errors.message}
            onChange={handleChange}
          />

          <Button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Enviando...' : 'Enviar mensagem'}
          </Button>

          {statusMessages[status] && (
            <p
              className={`${styles.status} ${status === 'error' ? styles.error : styles.success}`}
              role="status"
            >
              {statusMessages[status]}
            </p>
          )}
        </form>

        <aside className={styles.aside}>
          <h3 className={styles.asideTitle}>Redes profissionais</h3>
          <p className={styles.asideText}>
            Prefere outro canal? Fique à vontade para me chamar diretamente.
          </p>
          <SocialLinks links={profile.socials} />
        </aside>
      </div>
    </Section>
  );
}
