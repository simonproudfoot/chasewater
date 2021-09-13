var app = new Vue({
    el: '#app',
    data() {
        return {
            delay: 1000 * 60 * 3,
            idle: null,
            // Popups
            popups: {
                conservation: false
            },
            activeHeritage: null,
            heritage: [{
                image: 'assets/img/lake.png',
                title: 'Pre-history',
                text: 'In 500BC, sites to the south and north-east of Chasewater are occupied by a Celtic tribe who lived in hill forts until the arrival of the Romans. In 1086, Ogley Hay is mentioned in the Domesday Book as a cultivated area of 120 acres. In the 1500s Ogley Hay Manor sold for £15.<br><br>During the 1790s, large open fields with ‘ridge and furrow’ are developed on the heath to maximise food production in the early stages of the Napoleonic Wars. They are still discernible on Chasewater’s north shore. Work began on the reservoir in 1796, opening in 1797.',
                video: 'assets/video/demo.mp4',
            }, {
                title: '1950-1920',
                text: 'Several collieries are built during the 1850s and, by 1857, the total output of Cannock Chase Coalfield is noted as half a million tonnes per year. Railways are developed to support the mining industry. The Midlands Railway expands its coverage during this period and, in 1871, the Cannock Chase and Wolverhampton Railway built the line now used by the Chasewater Light Railway. <br><br>In 1918, floating water-plantain, now scarce, is recorded as ‘abundant and flowering’.',
                video: 'assets/video/demo.mp4',
                image: 'assets/img/lake.png',
            }, {
                title: '1921-1969',
                text: 'In 1947, the coal industry is nationalised. By then, several pits in the area have been closed down. In 1948, an article about the reservoir notes that “no less than 18 species of wader were recorded during the year”, including Common, Arctic and Black Terns. 1957 brings a year of drought, with water levels at their lowest since 1921. In 1968 the small fields and ponds between the western embankment and the railway are scraped bare, ready to be infilled with power station ash.',
                video: 'assets/video/demo.mp4',
                image: 'assets/img/lake.png',
            }, {
                title: '1970-1990',
                text: 'In 1973, it is discovered that nitrogen and phosphate rich processed sewage is the best fertiliser for the infilled western shore. In 1974, a man named Ronald Milhench crashed his car into Chasewater, killing his wife whose life insurance he had recently doubled. He was later jailed. Disaster strikes in 1976 when fires destroy most of the north shore heathland.<br></br>The Chasewater Master Plan and Development Strategy is published in 1984, recognising the nature conservation value of the area. The northern end of the lake is proposed as a nature reserve and, in 1986, Biddulph’s Pool and No Man’s Bank are notified as a SSSI by the Nature Conservancy Council, followed by Chasewater Heaths in 1987.',
                video: 'assets/video/demo.mp4',
                image: 'assets/img/lake.png',
            }, {
                title: '1991-present',
                text: 'In 1991, the County Structure Plan proposes a Country Park at Chasewater (it is declared as such in1998).1992 marks the last record of the Turtle Dove. Chasewater Wildlife Group forms in 1995 to combat the threat of infill to the Slurry Pool. In 1999, Norton Bog restoration starts with the Slurry Pool and work begins on a cycle path around the country park. <br><br>In 2000, the building of the Forest of Mercia Innovation Centre starts, along with phase 1 of the south shore development. The following year, work begins on the motorway. Grassland and heath are translocated to north of the dam. The M6 Toll opens in 2003. In 2011, the existing SSSI was extended to include nearly the entire Country Park as part of a landscape-scale heathland network, while the reservoir and nearby canal are included for their value for water birds, rare plant species and invertebrates.',
                video: 'assets/video/demo.mp4',
                image: 'assets/img/lake.png',
            }],
            // Site management
            alphabet: ['A', 'B', 'C', 'D'],
            quizActive: false,
            quizFinished: false,
            activeQuestion: 0,
            quizTimeLine: gsap.timeline({ reversed: true, onReverseComplete: this.resetQuiz }),
            quiz: [{
                    image: 'assets/img/deer.png',
                    question: 'What should I feed the deer?',
                    options: ['Crisps', 'Apples', 'Nothing; nature provides their food'],
                    answer: '',
                    correctAnswer: 'Nothing; nature provides their food'
                },
                {
                    image: 'assets/img/lake.png',
                    question: 'Why should dogs be kept on leads?',
                    options: ['To protect ground-nesting animals', 'To stop them fighting', 'To stop them getting lost'],
                    answer: '',
                    correctAnswer: 'To protect ground-nesting animals'
                },
                {
                    image: 'assets/img/lake.png',
                    question: 'Which plant can dog waste cause damage to if left on heathland?',
                    options: ['Floating water-plantain', 'Bilberry', 'Heather'],
                    answer: '',
                    correctAnswer: 'Heather'
                },
                {
                    image: 'assets/img/lake.png',
                    question: 'Why should cyclists dismount to pass others when necessary?',
                    options: ['It’s respectful to other path users', 'People are scared of bikes', 'The path is too narrow'],
                    answer: '',
                    correctAnswer: 'It’s respectful to other path users'
                },
                {
                    image: 'assets/img/lake.png',
                    question: 'Why are inflatables and unlicensed craft prohibited?',
                    options: ['We don’t like them', 'For biosecurity reasons', 'They might sink'],
                    answer: '',
                    correctAnswer: 'For biosecurity reasons'
                }
            ],
            managementSelected: null,
            management: [{
                icon: 'assets/img/icon-duck.svg',
                text: 'Please don’t feed the deer or ducks – nature provides enough for these animals'
            }, {
                icon: 'assets/img/icon-fire.svg',
                text: 'No swimming or paddling. No inflatables or unauthorised crafts – this helps us with biosecurity, preventing pathogens like the one killing white-clawed crayfish, from spreading between sites.'
            }, {
                icon: 'assets/img/icon-train.svg',
                text: 'Please keep off the railway line.'
            }, {
                icon: 'assets/img/icon-fire.svg',
                text: 'Take your litter home and refrain from lighting fires or BBQs.'
            }, {
                icon: 'assets/img/icon-walk.svg',
                text: 'Walkers, please keep to footpaths. Creating new paths cuts up the habitats we need to protect.'
            }, {
                icon: 'assets/img/icon-cycleB.svg',
                text: 'Cyclists, please keep to the cycle ways and dismount to pass others when necessary.'
            }, {
                icon: 'assets/img/icon-dog.svg',
                text: 'Keep dogs on leads to protect ground-nesting animals.'
            }, {
                icon: 'assets/img/icon-trash.svg',
                text: 'Bag and bin dog waste - animal mess left on the heathland adds lots of nutrients and physically changes the soil, which makes the heather sick.'
            }],
            // Wildlifes
            selectedConservation: 0,
            conservation: [{
                    preTitle: 'Project One',
                    title: 'Heathland Restoration',
                    image: 'assets/img/lake.png',
                    position: ['300', '1135'],
                    content: 'The heathland areas are managed through a five-year Higher-Level Stewardship (HLS) scheme. Activities include scrub clearance and management of conifer plantations. Lowland heathland is incredibly rare (over 80% has been lost since 1800) so preserving it is essential.'
                },
                {
                    preTitle: 'Project Two',
                    title: 'Invasive Species',
                    image: 'assets/img/lake.png',
                    position: ['919', '1319'],
                    content: 'The White-Clawed Crayfish is a threatened species, predominantly due to the increase in invasive species such as the Signal crayfish, and a fungal pathogen, which Signal crayfish are immune to, but White-Clawed Crayfish are not. We have a biosecurity plan on site to try and prevent the spread of this pathogen.'
                },
                {
                    preTitle: 'Project Three',
                    title: 'Conservation Grazing',
                    image: 'assets/img/lake.png',
                    position: ['700', '420'],
                    content: 'Conservation grazing is one of the most sustainable ways of managing the heathland. One of its benefits is creating bare ground, which is important for ground-nesting birds such as the nightjar. We have introduced grazing at a new section of the Chasewater SSSI known locally as The Old Trotting Track and are currently extending this scheme.'
                },
                {
                    preTitle: 'Project Four',
                    title: 'Pond management',
                    image: 'assets/img/lake.png',
                    position: ['919', '87'],
                    content: 'To support the wildlife living in or around ponds, we undertake management activities such as [protecting wetland plants] and [preventing pollution].'
                },
                {
                    preTitle: 'Project Five',
                    title: 'Building boardwalks',
                    image: 'assets/img/lake.png',
                    position: ['740', '1447'],
                    content: 'Building boardwalks and keeping footpaths in good repair is an essential part of our conservation work, allowing walkers to explore the area without creating new paths that cut up habitats and risk unsettling ground-nesting animals.'
                }
            ],
            // HABITATS
            habitatSelected: '',
            habitatTitles: {
                wetlandsFens: {
                    title: 'Wetlands/Fens',
                    image: 'assets/img/lake.png'
                },
                wetAndDrylowlandHeath: {
                    title: 'Wet and dry lowland heath',
                    image: 'assets/img/lake.png'
                },
                openWater: {
                    title: 'Open water',
                    image: 'assets/img/lake.png'
                }
            },
            habitats: {
                wetlandsFens: [{
                        title: 'Sea Club-Rush',
                        content: 'Sea Club-Rush is a species of perennial grass associated with freshwater habitats. They grow 30 to 100cm tall and feature club-shaped flowers on a sharply triangular stem.',
                        image: 'assets/img/lake.png'
                    },
                    {
                        title: 'Early Marsh Marigold',
                        content: 'This wildflower is also known as the ‘Kingcup’ because its large, golden flowers look like the cups of kings. It favours damp spots, grows up to 50cm tall and frogs love it because it provides shelter.',
                        image: 'assets/img/lake.png'
                    }
                ],
                wetAndDrylowlandHeath: [{
                        title: 'Ling',
                        content: 'Ling heather is green in the winter and purple and pink in the autumn. It’s a robust plant that pretty much takes care of itself and brightens up the landscape.',
                        image: 'assets/img/lake.png'
                    },
                    {
                        title: 'Skylark',
                        content: 'The Skylark is a small brown bird with a crest and white-sided tail. They’re renowned for their flight pattern; rising almost vertically into the air and hovering and singing before rapidly descending. The Skylark has experienced a population decline and is categorised as a Red List species, meaning it’s globally threatened.',
                        image: 'assets/img/lake.png'
                    }
                ],
                openWater: [{
                        title: 'Floating water-plantain',
                        content: 'One of two nationally scarce vascular plant species, floating water-plantain can be observed in Jeffrey’s Swag and the Anglesey Branch of the Wyrley and Essington Canal. It has oval leaves that float on the water surface when grown in shallow water, but narrow long leaves in deeper water.',
                        image: 'assets/img/lake.png'
                    },
                    {
                        title: 'Round-leaved wintergreen',
                        content: 'Another nationally scarce species, and a regional rarity, the round-leaved wintergreen can be found in the heathlands and on the edge of the fen vegetation on the north shore of Chasewater. It can be distinguished by its glossy circular leaves and drooping saucer-shaped flowers with five white petals.',
                        image: 'assets/img/lake.png'
                    },
                    {
                        title: 'Snipe',
                        content: 'Snipes are wading birds with short legs and long straight bills. The males and females are both mottled brown on top with paler stripes on the back and dark streaks on the chest. On early spring mornings, you may hear the males making a ‘drumming’ sound as part of their courtship display flights.',
                        image: 'assets/img/lake.png'
                    },
                    {
                        title: 'Tufted duck',
                        content: 'The tufted duck is a medium-sized diving bird that is black on the head, neck, breast and back, and white on the sides. It has a small crest, and a yellow eye. On Chasewater, they are often approaching nationally important numbers and can be seen all year round.',
                        image: 'assets/img/lake.png'
                    }
                ]
            },
            specieSelected: 0,
            species: [{
                    name: 'intro',
                    title: 'Species',
                    text: 'As you explore the park, keep an eye out for some of the many different species that live here. On a misty morning, you might see red deer grazing in the open heath and woodland fringes. But what else could you be looking out for?',
                    image: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=670&q=80'
                },
                {
                    title: 'GREEN HAIRSTREAK BUTTERFLY',
                    name: 'Butterflies',
                    image: 'https://images.unsplash.com/photo-1622641264055-1dcdb3b5c04e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JlZW4lMjBoYWlyc3RyZWFrJTIwYnV0dGVyZmx5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
                    text: 'As well as having a cool-sounding name, the Green Hairstreak Butterfly is a heathland speciality. The brown undersides of their wings are only ever seen in flight, as they rest with their wings closed. The undersides appear green, an effect produced by the diffraction of light on the lattice-like structure within the wing scales. Your best chance for spotting a Green Hairstreak is between May and June.'
                },
                {
                    title: 'GREAT CRESTED GREBE',
                    name: 'Birds',
                    image: 'https://images.unsplash.com/photo-1617824891298-3b3dc43daa5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2575&q=80',
                    text: 'The Great Crested Grebe is a waterbird with beautiful head plumes. Now protected under the Wildlife and Countryside Act 1981, this bird was almost driven out of the UK due to hunting – with its feathers the intended prize! You’ll see these birds diving underwater to catch fish, but they’re clumsy on land because their feet are placed so far back on their bodies. Great Crested Grebes can be seen all year round.'
                }, {
                    title: 'Great crested newt',
                    name: 'Dragonflies',
                    image: 'https://images.unsplash.com/photo-1511974035430-5de47d3b95da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                    text: 'The boggy areas of Chasewater are ideal for spotting dragonflies. Several types have been seen in Chasewater, including the Emperor Dragonfly, which is frequently spied at Fly Pool, Biddulph’s Pool and Plant Swag. Known as Britain’s ‘bulkiest’ dragonflies, male and female Emperors have different colourings. The males are sky blue while the females are green. <br><br>You’re most likely to see an Emperor Dragonfly from mid-June to early August.'
                }
            ]
        }
    },
    mounted() {

        var idle = new IdleJs({
            onIdle: () => {
                window.location.href = 'index.html'
            },
            idle: this.delay,
            keepTracking: true
        }).start();


        //  this.startTimer()
        gsap.fromTo('.speechBox', {
            rotation: 90,
            scale: 0.3,
            opacity: 0
        }, {
            delay: 2,
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 0.2,
        })
        gsap.fromTo('.sceneryAnim', {
            y: 350
        }, {
            delay: 0.3,
            duration: 2,
            y: 0
        })
        gsap.fromTo('.character', {
            y: 200
        }, {
            delay: 0.3,
            duration: 2,
            y: 0
        })
        gsap.fromTo('.infoBox', {
            opacity: 0,
            y: -50
        }, {
            delay: 0.3,
            opacity: 1,
            duration: 0.5,
            y: 0
        })
        gsap.fromTo('.pageMenu .button, .pageDiscover .button, .pageHabitats button, .pageConservation button', {
                opacity: 0,
                scale: 0.8,
            }, {
                delay: 0.5,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                scale: 1,
            })
            // INTRO ANIMATIONS
        gsap.to('.pageIndex .button, .pageIndex .badge', {
            opacity: 1,
            duration: 1.5,
            delay: 4
        })
        gsap.fromTo('.pageIndex .intro-1', {
            opacity: 0,
            yPercent: 50,
        }, {
            delay: 0.5,
            opacity: 1,
            duration: 1,
            stagger: 1,
            yPercent: 0,
        })
        gsap.to('.pageIndex .intro-1', {
            opacity: 0,
            duration: 0.7,
            delay: 6,
            display: 'none'
        })
        gsap.fromTo('.pageIndex .intro-2', {
            opacity: 0,
            yPercent: 50,
        }, {
            delay: 7,
            opacity: 1,
            duration: 1,
            stagger: 1,
            yPercent: 0,
        })
    },
    computed: {
        quizResult() {
            var correct = 0
            this.quiz.forEach(x => {
                x.answer === x.correctAnswer ? correct++ : null
            });
            return correct
        }
    },
    methods: {
        startTimer() {
            this.timeoutId = window.setTimeout(this.doInactive, this.timeoutInMiliseconds)
        },

        doInactive() {
            alert('TIME OUT!!')
        },

        goHome() {
            alert('sdfds')
        },

        tryAgain() {
            this.activeQuestion = 0
        },
        answerQ(val) {
            if (this.quiz[this.activeQuestion] != undefined) {
                var x = this.quiz[this.activeQuestion]
                x.answer = val
                this.$set(this.quiz, this.activeQuestion, x)
                setTimeout(() => {
                    this.activeQuestion <= this.quiz.length ? this.activeQuestion++ : null
                }, 400);
            }
            if (this.activeQuestion == this.quiz.length - 1) {
                setTimeout(() => {
                    this.quizFinished = true
                }, 500);
            }
        },
        runQuiz(val) {
            if (val) {
                this.quizTimeLine.play(0)
                    //   transformOrigin: "center center" }
                this.quizTimeLine.to('.sceneryAnim', { scale: 1.2, duration: 1 })
                this.quizTimeLine.to('.character', {
                    x: 250,
                    yPercent: 10,
                    scale: 1.2,
                    duration: 1,
                }, '-=1')
                this.quizTimeLine.set(".character", { delay: 1, transformOrigin: "center center", scaleX: -1.2, scaleY: 1.2, }, '-=1');
                this.quizTimeLine.from('.quiz.selectorButtons', {
                    opacity: 0,
                    yPercent: 30,
                    duration: 1,
                }, '-=0.5')
                setTimeout(() => {
                    this.quizActive = true
                }, 200);
            } else {
                this.resetQuiz(true)
            }
        },
        resetQuiz(resetFully) {
            this.quiz.forEach(x => {
                x.answer = ''
            });
            this.quizFinished = false
            this.activeQuestion = 0
            if (resetFully) {
                this.quizActive = false
                this.quizTimeLine.reverse()
                setTimeout(() => {
                    this.quizTimeLine.clear()
                }, 2000);
            }
        },
        selectSpecie(i) {
            this.specieSelected = i
        }
    }
})