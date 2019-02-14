const routes = require('next-routes')

                                                  
module.exports = routes()                          
.add('about')                                       
.add('blog', '/blog/:slug')                        
