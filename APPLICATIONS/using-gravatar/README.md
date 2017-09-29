# Using Gravatar
This a basic Ruby On Rails application that allows for users to sign up and store their contacts. This a template application for the Using-Gravatar talk. You can visit the slides for this talk through here
## Launch application
1. Run `bundle install` to install all application dependencies.
2. Run `rake db:migrate` to update the sql database.
3. Run `rail server` to view the application.
4. Go to http://localhost:3000 to view the application.

## Steps to Setup Gravatar
1. Update the image tag in views/contacts/index.html.erb to the following:
```
<%= image_tag gravatar_url(contact, 64), {:class => "activator"}%>
```
2. Update the image in views/contacts/show.html.erb to the following:
```
<%= image_tag gravatar_url(@contact, 1024), {:class => "responsive-img"}%>
```
3. Add this to your application.helper.rb file.
```
def gravatar_url(contact, size)
 gravatar_id= Digest::MD5::hexdigest(contact.email.downcase)
 default_url =[URL_OF_CHOICE]
 url = "http://gravatar.com/avatar/#{gravatar_id}.png?s=#{size}&d=#{CGI.escape(default_url)}"
end
```
