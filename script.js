        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Mobile Navigation Toggle
        const mobileToggle = document.querySelector('.mobile-nav-toggle');
        const mobileMenu = document.querySelector('.mobile-nav-menu');

        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: targetSection,
                        ease: "power2.inOut"
                    });
                }

                // Close mobile menu if open
                mobileMenu.classList.remove('active');
            });
        });

        // Update active navigation based on scroll position
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-link');

        sections.forEach(section => {
            ScrollTrigger.create({
                trigger: section,
                start: "top 40%",
                end: "bottom 40%",
                onEnter: () => updateActiveNav(section.id),
                onEnterBack: () => updateActiveNav(section.id)
            });
        });

        function updateActiveNav(sectionId) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }

        // Hero animations
        gsap.fromTo('.hero h1', 
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, delay: 0.5 }
        );

        gsap.fromTo('.hero p', 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, delay: 0.8 }
        );
        
        const images = [
            'image/04.jpg',
            'image/000036.JPG',
            'image/koko.jpg',
            'image/0024.JPG'
        ];

        let index = 0;
        const heroSection = document.querySelector('.hero');

        setInterval(() => {
            index = (index + 1) % images.length;
            heroSection.style.backgroundImage = `
                linear-gradient(to bottom, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.58)),
                url('${images[index]}')`;
        }, 4000);

        // About section animations
        gsap.fromTo('.about-text', 
            { opacity: 0, x: -50 },
            { 
                opacity: 1, 
                x: 0, 
                duration: 1,
                scrollTrigger: {
                    trigger: '.about',
                    start: 'top 70%'
                }
            }
        );

        gsap.fromTo('.about-image', 
            { opacity: 0, x: 50 },
            { 
                opacity: 1, 
                x: 0, 
                duration: 1,
                scrollTrigger: {
                    trigger: '.about',
                    start: 'top 70%'
                }
            }
        );

        // Text Slide
        function textSlideLoop(selector, speed = 1) {
        const track = document.querySelector(selector);
        if (!track) return;

        let position = 0;
        const loop = () => {
            position += speed;
            if (position >= track.scrollWidth / 3) {
            position = 0;
            }
            track.style.transform = `translateX(-${position}px)`;
            requestAnimationFrame(loop);
        };
        loop();
        };


        document.addEventListener('DOMContentLoaded', () => {
        textSlideLoop('.textslide-track', 1);
        });


        // Work items animations
        gsap.fromTo('.work-item', 
            { opacity: 0, y: 50 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.6,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '.work',
                    start: 'top 70%'
                }
            }
        );

        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.overlay-text').forEach(el => {
            if (el.textContent.length > 15) {
                el.style.fontSize = '0.75rem';
            }
            });
        });

        // ข้อมูลโครงการ
        const projectData = {
            work1: {
                title: "Mobile Network Catalog",
                subtitle: "AIS Business Catalog 2026",
                image: "https://img2.pic.in.th/pic/ais01.jpg",
                description: "I have the chance to design AIS Business Catalog 2026. This year concept is The Digital Infrastructure Connect & Compute, the essential foundation empowering Sustainable Business and a Sustainable Thailand. In addition, I also designed the UI for the front-end of the AIS Cloud website, ensuring a seamless and user-friendly experience across both desktop and mobile platforms.",
                tags: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
                links: [
                    {
                        url: "https://www.ais.th/business/enterprise/technology-and-solution/cloud-and-data-center/ais-cloud/overview",
                        icon: "https://img.icons8.com/?size=100&id=16139&format=png&color=333333"
                    }
            ]
        },
            work2: {
                title: "Elegant Decor Website",
                subtitle: "Business Website",
                image: "https://img5.pic.in.th/file/secure-sv1/F_G_Edit_ed_home2_2.jpg",
                description: "Designed a website for the tile business Elegant Decor, focusing on a clean, luxurious, and user-friendly interface to reflect the brand's premium image. The website showcases high-quality decorative materials such as marble tiles, natural stone, wood collections, and outdoor anti-slip surfaces. It includes key sections like product highlights, past projects, blog updates, and a contact map, along with a catalog download feature to enhance user convenience.",
                tags: ["Adobe Illustrator", "Adobe Photoshop", "Sketch App"]
            },
            work3: {
                title: "Candlelight Procession",
                subtitle: "Sanook.com Microsite for Thai Buddhist holy days",
                image: "https://img2.pic.in.th/pic/candle.jpg",
                description: "Microsites that you can make candles online. I made activity flow and wireframe before design. Design closely consult with front-end for animate character. walk cycle is the most difficult in this project and the point that should be improved the most in this work.",
                tags: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
                links: [
                    {
                        url: "https://season.sanook.com/candlewalk",
                        icon: "https://img.icons8.com/?size=100&id=16139&format=png&color=333333"
                    }
            ]                
            },
            work4: {
                title: "Graphic Design",
                subtitle: "Collect artwork from various works that have been done.",
                images: [
                    "https://img5.pic.in.th/file/secure-sv1/Bkk.gif",
                    "https://img2.pic.in.th/pic/gf1.jpg", 
                ],
                description: "I work on a variety of general design tasks, including banners and posters for social media, as well as brand logo improvements. In addition, I spend most of my free time creating infographics about topics I'm interested in.",
                tags: ["Adobe Illustrator", "Adobe Photoshop", "Figma"]
            },
            work5: {
                title: "DoDee Website",
                subtitle: "Website design for DoDee Paidang Restaurant Australia and its affiliated branches",
                images: [
                    "https://img2.pic.in.th/pic/dd1.gif",
                    "https://img5.pic.in.th/file/secure-sv1/DD123.jpg", 
                    "https://img5.pic.in.th/file/secure-sv1/ks19870d62e4cff979.gif"
                ],
                description: "Designed the website for DoDee restaurant and its affiliated branches in Australia, focusing on user-friendly UX/UI optimized for mobile screens. Used vibrant colors and incorporated food photography to create an engaging visual experience.",
                tags: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
                links: [
                    {
                        url: "https://www.dodeepaidang.com/",
                        icon: "https://img.icons8.com/?size=100&id=16139&format=png&color=333333"
                    }
                ]
            },
            
            work6: {
                title: "Sanook Application",
                subtitle: "News Application Design",
                image: "https://img2.pic.in.th/pic/sanook.jpg",
                description: "Sanook.com was once the most visited news website in Thailand and still maintains a strong presence through its mobile application, which allows users to read news just like on the website. As mobile apps became increasingly popular. As the lead designer, I redesigned the app to improve its usability and better align with user behavior. This redesign resulted in a noticeable increase in the number of users at the time.",
                tags: ["Adobe Illustrator", "Adobe Photoshop", "Adobe XD"]
            },
            work7: {
                title: "Toy Design Project “Various Animals”",
                subtitle: "A Thesis",
                image: "https://img2.pic.in.th/pic/Various.jpg",
                description: "A Thesis Submitted in Partial Fulfillment of the Requirements for the Bachelor of Education Degree Department of Art Education, Department of Art, Music and Dance Studies, Faculty of Education, Chulalongkorn University (Academic year 2012). I was inspired by the similarities and differences among animal types, to design a wooden toy under the topic “various animals” for children aged 7 and up, these toys allow kids to assemble different animal parts, showcasing the diversity of the animal kingdom while emphasizing their shared characteristics.",
                tags: ["Adobe Photoshop"]
            },
            work8: {
                title: "JOOX TV",
                subtitle: "Participated in Tencent's 2019 Hackathon as the team’s designer and contributed to winning an award.",
                image: "https://img5.pic.in.th/file/secure-sv1/4c45562ec7b57fa6b.jpg",
                description: "JOOX Application Design for Television. I worked with members from different team in the company to compete in the Hackathon#6. I've designed an interface on a larger scale than mobile and desktop and was 1 of 5 winning projects.",
                tags: ["Adobe Photoshop", "Adobe XD"]
            }
        };

        function openPopup(workId) {
            const popup = document.getElementById('popup');
            const project = projectData[workId];

            if (!popup) {
                console.error('ไม่พบ element ที่มี id="popup"');
                return;
            }

            if (!project) {
                console.error(`ไม่พบ project ที่ตรงกับ workId: ${workId}`);
                return;
            }

            // Update popup content
            document.getElementById('popup-title').textContent = project.title || '';
            document.getElementById('popup-subtitle').textContent = project.subtitle || '';
            document.getElementById('popup-image').src = project.image || '';
            document.getElementById('popup-description').textContent = project.description || '';

            // Update tags
            const tagsContainer = document.getElementById('popup-tags');
            if (tagsContainer) {
                tagsContainer.innerHTML = '';
                (project.tags || []).forEach(tag => {
                    const tagElement = document.createElement('span');
                    tagElement.className = 'popup-tag';
                    tagElement.textContent = tag;
                    tagsContainer.appendChild(tagElement);
                });
            }

            const popupLinks = document.getElementById('popup-links');
            popupLinks.innerHTML = ''; 

            if (project.links && Array.isArray(project.links)) {
                project.links.forEach(link => {
                    const a = document.createElement('a');
                    a.href = link.url;
                    a.target = '_blank';
                    a.rel = 'noopener noreferrer';

                    const img = document.createElement('img');
                    img.src = link.icon;
                    img.alt = 'link icon';
                    img.classList.add('link-icon');

                    a.appendChild(img);
                    popupLinks.appendChild(a);
                });
            }

            const imageContainer = document.getElementById('popup-image-container');
            const singleImage = document.getElementById('popup-image');
            
            if (project.images && Array.isArray(project.images)) {
                
                console.log('แสดงหลายภาพ:', project.images); // debug
                
                if (singleImage) singleImage.style.display = 'none';
                
                if (imageContainer) {
                    imageContainer.innerHTML = '';
                    imageContainer.style.display = 'block';
                    
                    project.images.forEach((imageUrl, index) => {
                        const img = document.createElement('img');
                        img.src = imageUrl;
                        img.alt = `${project.title} - Image ${index + 1}`;
                        img.className = 'popup-image-item';
                        img.style.cssText = `
                            width: 100%;
                            margin-bottom: 10px;
                            display: block;
                        `;
                        
                        img.onload = () => console.log(`ภาพ ${index + 1} โหลดสำเร็จ`);
                        img.onerror = () => console.log(`ภาพ ${index + 1} โหลดไม่สำเร็จ: ${imageUrl}`);
                        
                        imageContainer.appendChild(img);
                    });
                }
            } else if (project.image) {

                console.log('แสดงภาพเดียว:', project.image); // debug
                
                if (imageContainer) imageContainer.style.display = 'none';
                if (singleImage) {
                    singleImage.style.display = 'block';
                    singleImage.src = project.image;
                }
            } else {
                // ไม่มีภาพ
                console.log('ไม่มีภาพ'); // debug
                if (imageContainer) imageContainer.style.display = 'none';
                if (singleImage) singleImage.style.display = 'none';
            }

            // Show popup
            popup.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closePopup(event) {
            if (event && event.target !== event.currentTarget) return;
            
            const popup = document.getElementById('popup');
            popup.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Close popup with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closePopup();
            }
                        
            window.openPopup = openPopup;
            window.closePopup = closePopup;

            // Close popup with Escape key
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    closePopup();
                }
            });
        });
        

