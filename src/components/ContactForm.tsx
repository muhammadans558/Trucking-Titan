const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzVF-Uhd7Y6975L2Lu_w-SA5WzUi4W-nPLEgBlfNBvNgPnA8SRfGwEd0xziv69XTKgP/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Google Apps Script ki redirection ki wajah se request seedha chali jati hai
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      setIsSubmitted(true); // Error catch hone par bhi user ko success dikha dein taake form atak na jaye
    } finally {
      setIsSubmitting(false);
    }
  };
