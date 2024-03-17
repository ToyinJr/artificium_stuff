{
    let hero1 = document.getElementById('hero1');
    let hero2 = document.getElementById('hero2');
    let artificium = document.getElementById('artificium');
    let chat = document.getElementById('chat');

    // chat.addEventListener('click', () => {
    //     hero1.style.display = 'none';
    //     hero2.style.display = 'block';
    // })
}

let Welcome = () => {
    return (
        <div className="main2">
        <div className="text-white gap-4 disp">

            <div className="grid tab rounded-lg p-2">
                <div className="flex justify-between pb-2 items-start">
                    <div className="flex flex-wrap gap-2">
                        <img src="/images/profile.svg" alt="profile" />
                        <div>
                            <p>Intellisys</p>
                            <p className="text-green-400">12 members</p>
                        </div>
                    </div>

                    <button className=""><img src="/images/chevron-down.svg" alt="chevron down" /></button>
                </div>

                <hr />

                <div className="grid">
                    <p className="text-gray-400">GENERAL</p>
                    <div>
                        <div className="flex justify-between">
                            <div className="flex"><img src="/images/search.svg" alt="search" /> <p>Search</p></div>
                            <div><img src="/images/Badge.svg" alt="badge" /></div>
                        </div>

                        <div className="flex"><img src="/images/credit-card.svg" alt="credit card" /> <p>Billing</p></div>
                    </div>
                </div>

                <hr />

                <div className="grid items-start">
                    <p className="text-gray-400">PROJECTS</p>
                    <div className="flex pr"><div><img src="/images/orbital.svg" alt="orbital" /></div><p>Orbital Oddysey</p></div>
                    <div className="flex pr"><img src="/images/digital.svg" alt="digital" /><p>Digital Product Launch</p></div>
                    <div className="flex pr"><img src="/images/brand.svg" alt="brand" /><p>Brand Refresh</p></div>
                    <div className="flex pr"><img src="/images/social.svg" alt="social" /><p>Social Media Strategy</p></div>
                    <div className="flex gap-4"><button><img src="/images/add.svg" alt="add" /></button><p className="text-gray-400">Add new project</p></div>
                </div>

                <div className="flex justify-between rounded-lg m-2 p-2 profile self-end">
                    <div className="flex items-center">
                        <img src="/images/user-avatar.svg" alt="user avatar" />
                        <div className="">
                            <p>Ryan Lee</p>
                            <p className="text-green-400">Premium</p>
                        </div>
                    </div>

                    <button className=""><img src="/images/settings.svg" alt="settings" /></button>
                </div>

            </div>

            <div className="grid items-start rounded-lg nav p-2">
                <div className="flex justify-between">
                    <div>
                        <p>Orbital Oddysey</p>
                        <p>Marketing Campaign for a new TV series Launch</p>
                    </div>

                    <div className="flex justify-around flex-wrap gap-2">
                        <div>
                            <img src="/images/users3.svg" alt="users" />
                        </div>

                        <button className="flex items-center gap-2">
                            <img src="/images/share.svg" alt="share" />
                            <p className="text-gray-400">Share</p>
                        </button>

                        <button><img src="./images/pen.svg" alt="pen" /></button>
                    </div>
                </div>

                <div className="flex gap-5 self-end">
                    <div className="flex gap-1 nav2" id="artificium"><img src="/images/artificium.svg" alt="artificium logo"/>Artificium</div>
                    <div className="flex gap-1 nav2" id="chat"><img src="/images/chat.svg" alt="chat" />Chat</div>
                    <div className="flex gap-1 nav2"><img src="/images/library.svg" alt="library" />Library</div>
                </div>
            </div>

            <div className="grid content mx-4 my-1">
               
                <div  id="hero1">
                <div className="hero p-6">
                <p>Innovation StarterPack</p>
                <p className="text-gray-400">Kickstart your innovation process with our comprehensive selection of predefined prompts.</p>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    <div className="">
                        <div className="ui mx-auto"><img src="/images/chat2.svg" alt="chat2" /> </div>
                        <p className="text-center p-2 text-2xl">Creative Assets</p>
                        <div className="card p-3 m-1 flex gap-2  ">UI wireframe<img src="/images/right-arrow.svg" alt="right arrow" /></div>
                        <div className="card p-3 m-1 flex gap-2 ">Brochure design<img src="/images/right-arrow.svg" alt="right arrow" /></div>
                        <div className="card p-3 m-1 flex gap-2 ">Social media<img src="/images/right-arrow.svg" alt="right arrow" /></div>
                        <div className="card p-3 m-1 flex gap-2 ">Brand guidelines<img src="/images/right-arrow.svg" alt="right arrow" /></div>
                    </div>

                    <div className="">
                        <div className="ui mx-auto"><img src="/images/dev.svg" alt="chat2" /> </div>
                        <p className="text-center p-2 text-2xl">Developer Tools</p>
                        <div className="card p-3 m-1 flex gap-2 ">API Integration<img src="/images/right-arrow.svg" alt="right arrow" /></div>
                        <div className="card p-3 m-1 flex gap-2 ">Test automation<img src="/images/right-arrow.svg" alt="right arrow" /></div>
                        <div className="card p-3 m-1 flex gap-2 ">DB optimization<img src="/images/right-arrow.svg" alt="right arrow" /></div>
                        <div className="card p-3 m-1 flex gap-2 ">Code review   <img src="/images/right-arrow.svg" alt="right arrow" /></div>
                    </div>
                    
                    <div className="">
                        <div className="ui mx-auto"><img src="/images/pencil.svg" alt="chat2" /> </div>
                        <p className="text-center p-2 text-2xl">Content Creation</p>
                        <div className="card p-3 m-1 flex gap-2 ">Product description<img src="/images/right-arrow.svg" alt="right arrow" /></div>
                        <div className="card p-3 m-1 flex gap-2 ">E-mail copy<img src="/images/right-arrow.svg" alt="right arrow" /></div>
                        <div className="card p-3 m-1 flex gap-2 ">Whitepaper<img src="/images/right-arrow.svg" alt="right arrow" /></div>
                        <div className="card p-3 m-1 flex gap-2 ">Press release<img src="/images/right-arrow.svg" alt="right arrow" /></div>
                    </div>

                    <div className="">
                        <div className="ui mx-auto"><img src="/images/idea.svg" alt="chat2" /> </div>
                        <p className="text-center p-2 text-2xl">Idea Generation</p>
                        <div className="card p-3 m-1 flex gap-2 ">Hasghtag ideas<img src="/images/right-arrow.svg" alt="right arrow" /></div>
                        <div className="card p-3 m-1 flex gap-2 ">Brainstorming<img src="/images/right-arrow.svg" alt="right arrow" /></div>
                        <div className="card p-3 m-1 flex gap-2 ">trend analysis<img src="/images/right-arrow.svg" alt="right arrow" /></div>
                        <div className="card p-3 m-1 flex gap-2 ">Social media posts<img src="/images/right-arrow.svg" alt="right arrow" /></div>
                    </div>
                </div>
                </div>

                <div id="hero2">
                    <div className="chat-box1 p-2 rounded-lg flex gap-3">

                    <div className="avatar">
                    <img src="/images/avatar2.svg" alt="avatar" />
                    </div>

                    <div className="chat-text">
                          <div className="flex gap-1 pb-1">
                          Artificium
                          <p className="text-gray-400">11sec now</p>
                        </div>
                        Of course! What kind of ideas are you looking for?
                    <div className="flex gap-2 actions-buttons">
                        <button className="p-2 rounded-lg actions">Regenerate response</button>
                        <button className="p-2 rounded-lg actions flex items-center dropdown">Modify <img src="/images/chevron-down.svg" alt="chevron" />
                        <div className="dropdown-content">
                           <div className="flex gap-2"><img src="/images/create.svg" alt="create" />Create vatiation</div>
                           <div className="flex gap-2"><img src="/images/adjust.svg" alt="adjust" />Adjust</div>
                           <div className="flex gap-2"><img src="/images/share.svg"  alt="share"/>Share</div>
                           <div className="flex gap-2"><img src="/images/export.svg" alt="export" />Export</div>
                          </div>
                          </button>
                    </div>
                    </div>
                    </div>

                    <div className="chat-box1 p-3 rounded-lg gap-2 flex gap-3">

                    <div className="avatar">
                    <img src="/images/user-avatar.svg" alt="avatar" />
                    </div>

                    <div className="chat-text">
                          <div className="flex gap-1 pb-1">
                          Ryan Lee
                          <p className="text-gray-400">4sec ago</p>
                        </div>
                        I'm not sure, maybe something related to the spaceship?

                    <div className="flex gap-2 actions-buttons">
                        <button className="p-2 rounded-lg actions">Regenerate response</button>
                        <button className="p-2 rounded-lg actions flex gap-1 items-center">Modify <img src="/images/chevron-down.svg" alt="chevron" /></button>
                    </div> 
                    </div>
                    </div>

                    <div className="chat-box1 p-3 rounded-lg gap-2 grid">
                    <div className="avatar">
                    <img src="/images/avatar2.svg" alt="avatar" />
                    </div>

                    <div className="chat-text">
                          <div className="flex gap-1 pb-1">
                          Artificium
                          <p className="text-gray-400">now</p>
                        </div>
                        Okay, let's explore some options related to the spaceship, Here are some things I can do for you:
                    </div>
                        
                    <div className="flex justify-between actions-buttons">
                        <div className="s-cards rounded-lg">
                            <img src="/images/image.svg" alt="gallery" className="pb-2" />
                            Image <br />  generation
                        </div>
                        <div className="s-cards rounded-lg">
                            <img src="/images/dev.svg" alt="dev" className="pb-2" />
                            Code <br />  engineering
                        </div>
                        <div className="s-cards rounded-lg">
                            <img src="/images/pencil.svg" alt="pencil" className="pb-2" />
                            Content <br />  creation
                        </div>
                        <div className="s-cards rounded-lg">
                            <img src="/images/idea.svg" alt="idea" className="pb-2" />
                            Idea <br />  generation
                        </div>
                        <div className="s-cards rounded-lg">
                            <img src="/images/play.svg" alt="play" className="pb-2" />
                            Audio/Video <br />  creation
                        </div>
                        
                    </div>

                    </div>
                </div>

               
            <div className="input-container self-end">
              <input type="text" placeholder="You can ask me anything! I am here to help." className=" ask" />
              <img src="/images/microphone.svg" alt="microphone" className="microphone"/>
              <img src="/images/attach.svg" alt="attach" className="attachments"/>
              <img src="/images/send.svg" alt="send" className="send"/>
            </div>

            </div>

        </div>

    </div>
    )

    
}





export default Welcome;