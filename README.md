# Gatsby project implementing MailChimp sign up and cookie consent warning
===
To be able to use Mailchimp form you need to obtain action string.

To do that you need to:

1. Create Mailchimp account or Log In to existing one
2. Go to Audience -> Signup Forms -> Embedded Forms and find section 
"Copy/paste onto your site"
3. Look for a action attribute and copy it's content (where will be a URL string)
4. Save it in your .env file with name GATSBY_MAILCHIMP_ACTION