import { useState } from 'react';

const initialValues = { name: '', email: '', message: '' };
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Retorna um objeto { campo: mensagem } apenas com os campos inválidos. */
function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = 'Informe seu nome.';
  if (!EMAIL_REGEX.test(values.email)) errors.email = 'Informe um e-mail válido.';
  if (values.message.trim().length < 10) {
    errors.message = 'A mensagem precisa ter pelo menos 10 caracteres.';
  }
  return errors;
}

/**
 * Controla o estado, a validação e o envio do formulário de contato.
 *
 * Se a variável VITE_FORMSPREE_ID estiver definida, envia via Formspree;
 * caso contrário, abre o cliente de e-mail do visitante com a mensagem preenchida.
 *
 * @param {string} recipientEmail - e-mail que recebe as mensagens (fallback mailto)
 */
export function useContactForm(recipientEmail) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  // 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Remove o erro do campo assim que o usuário começa a corrigi-lo.
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

    if (!formspreeId) {
      const subject = encodeURIComponent(`Contato pelo portfólio — ${values.name}`);
      const body = encodeURIComponent(`${values.message}\n\n${values.name} <${values.email}>`);
      window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
      setStatus('success');
      setValues(initialValues);
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error('Falha no envio');
      setStatus('success');
      setValues(initialValues);
    } catch {
      setStatus('error');
    }
  };

  return { values, errors, status, handleChange, handleSubmit };
}
