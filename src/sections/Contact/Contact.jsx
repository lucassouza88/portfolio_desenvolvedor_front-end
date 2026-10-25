import { useEffect, useState } from 'react';
import Section from '../../components/Section/Section.jsx';
import SocialLinks from '../../components/SocialLinks/SocialLinks.jsx';
import Button from '../../components/Button/Button.jsx';
import Icon from '../../components/Icon/Icon.jsx';
import { profile } from '../../data/profile.js';
import styles from './Contact.module.css';

/** Seção "Contato": e-mail para copiar e links para as redes profissionais. */
export default function Contact() {
  const [copied, setCopied] = useState(false);

  // Volta o texto do botão ao normal alguns segundos depois de copiar.
  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 2500);
    return () => clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      // Sem acesso à área de transferência: seleciona o texto para cópia manual.
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(document.getElementById('contato-email'));
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  return (
    <Section
      id="contato"
      eyebrow="Contato"
      title="Vamos conversar?"
      subtitle="Tem uma vaga, um projeto ou só quer trocar uma ideia? Me mande um e-mail ou me encontre nas redes."
    >
      <div className={styles.card}>
        <div className={styles.email}>
          <span className={styles.label}>
            <Icon name="mail" size={18} /> E-mail
          </span>
          <span id="contato-email" className={styles.address}>
            {profile.email}
          </span>
        </div>

        <div className={styles.actions}>
          <Button onClick={copyEmail}>{copied ? 'E-mail copiado!' : 'Copiar e-mail'}</Button>
          <SocialLinks links={profile.socials} />
        </div>

        <span className={styles.srOnly} role="status">
          {copied ? 'E-mail copiado para a área de transferência' : ''}
        </span>
      </div>
    </Section>
  );
}
