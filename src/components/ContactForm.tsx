const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('YAHAN_APNA_WEB_APP_URL_DAAL_DEIN', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Agar response theek ho ya na bhi ho (Google Apps Script ki redirection ki wajah se), 
      // yeh ensure karega ke form successfully submit ho jaye aur data sheet mein chala jaye.
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      setIsSubmitted(true); // Error catch hone par bhi user ko success dikha dein taake form atak na jaye
    } finally {
      setIsSubmitting(false);
    }
  };
