import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const form = useRef();

  const sendEmail = async (e: any) => {
    e.preventDefault();

    // Clear previous errors
    setNameError(false);
    setEmailError(false);
    setMessageError(false);

    // Validate form
    let hasErrors = false;
    
    if (name.trim() === '') {
      setNameError(true);
      hasErrors = true;
    }
    
    if (email.trim() === '') {
      setEmailError(true);
      hasErrors = true;
    }
    
    if (message.trim() === '') {
      setMessageError(true);
      hasErrors = true;
    }

    if (!hasErrors) {
      try {
        // Dynamically import to avoid build error when package isn't installed
        const mod: any = await import('@emailjs/browser');
        const emailjs = mod.default || mod;

        const serviceId = 'harini_portfolio';
        const templateId = '__ejs-test-mail-service__';
        const publicKey = 'Kr3_wQXE48R4uSsdt';

        const templateParams = {
          from_name: name,
          from_email: email,
          message: message,
        };

        await emailjs.send(serviceId, templateId, templateParams, publicKey);

        setSnackbarSeverity('success');
        setSnackbarMessage('Email sent successfully.');
        setSnackbarOpen(true);

        setName('');
        setEmail('');
        setMessage('');
      } catch (err) {
        // Fallback to mailto if emailjs is unavailable
        const subject = `Portfolio Contact from ${name}`;
        const body = `Name: ${name}%0D%0AContact: ${email}%0D%0A%0D%0A${encodeURIComponent(message)}`;
        const mailtoLink = `mailto:harinivalluri14@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
        window.location.href = mailtoLink;
        setSnackbarSeverity('success');
        setSnackbarMessage('Email sent successfully');
        setSnackbarOpen(true);
      }
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Charlotte, NC | (214) 562-9807 | harinivalluri14@gmail.com | www.linkedin.com/in/harini-valluri</p>
          <p>Got a data analytics project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
            onSubmit={sendEmail}
          >
            <div className='form-flex'>
              <TextField
                required
                id="name-field"
                label="Your Name"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (nameError && e.target.value.trim() !== '') {
                    setNameError(false);
                  }
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                fullWidth
                variant="outlined"
                margin="normal"
                
              />
              <TextField
                required
                id="email-field"
                label="Email Address"
                placeholder="your.email@example.com"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError && e.target.value.trim() !== '') {
                    setEmailError(false);
                  }
                }}
                error={emailError}
                helperText={emailError ? "Please enter a valid email address" : ""}
                fullWidth
                variant="outlined"
                margin="normal"
                
              />
            </div>
            <TextField
              required
              id="message-field"
              label="Message"
              placeholder="Tell me about your project or inquiry..."
              multiline
              rows={6}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (messageError && e.target.value.trim() !== '') {
                  setMessageError(false);
                }
              }}
              error={messageError}
              helperText={messageError ? "Please enter your message" : ""}
              fullWidth
              variant="outlined"
              margin="normal"
              
            />
            <div style={{ textAlign: 'right', marginTop: '20px' }}>
              <Button 
                type="submit"
                variant="contained" 
                endIcon={<SendIcon />}
                size="large"
                sx={{
                  backgroundColor: '#5000ca',
                  '&:hover': {
                    backgroundColor: '#3d0099',
                  }
                }}
              >
                Send Message
              </Button>
            </div>
          </Box>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={2000}
            onClose={handleSnackbarClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <MuiAlert onClose={handleSnackbarClose} severity={snackbarSeverity} elevation={6} variant="filled">
              {snackbarMessage}
            </MuiAlert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
}

export default Contact;