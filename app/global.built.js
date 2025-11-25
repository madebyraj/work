// Animation Library

class AnimationLibrary {
    constructor() {
        this.easings = {
            'ease-bounce': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            'ease-linear': 'cubic-bezier(.25, .25, .75, .75)',
            'ease-in-sine': 'cubic-bezier(.47, 0, .745, .715)',
            'ease-out-sine': 'cubic-bezier(.39, .575, .565, 1)',
            'ease-in-out-sine': 'cubic-bezier(.445, .05, .55, .95)',
            'ease-in-quad': 'cubic-bezier(.55, .085, .68, .53)',
            'ease-out-quad': 'cubic-bezier(.25, .46, .45, .94)',
            'ease-in-out-quad': 'cubic-bezier(.455, .03, .515, .955)',
            'ease-in-cubic': 'cubic-bezier(.55, .055, .675, .19)',
            'ease-out-cubic': 'cubic-bezier(.215, .61, .355, 1)',
            'ease-in-out-cubic': 'cubic-bezier(.645, .045, .355, 1)',
            'ease-in-quart': 'cubic-bezier(.895, .03, .685, .22)',
            'ease-out-quart': 'cubic-bezier(.165, .84, .44, 1)',
            'ease-in-out-quart': 'cubic-bezier(.77, 0, .175, 1)',
            'ease-in-quint': 'cubic-bezier(.755, .05, .855, .06)',
            'ease-out-quint': 'cubic-bezier(.23, 1, .32, 1)',
            'ease-in-out-quint': 'cubic-bezier(.86, 0, .07, 1)',
            'ease-in-expo': 'cubic-bezier(.95, .05, .795, .035)',
            'ease-out-expo': 'cubic-bezier(.19, 1, .22, 1)',
            'ease-in-out-expo': 'cubic-bezier(1, 0, 0, 1)',
            'ease-in-circ': 'cubic-bezier(.6, .04, .98, .335)',
            'ease-out-circ': 'cubic-bezier(.075, .82, .165, 1)',
            'ease-in-out-circ': 'cubic-bezier(.785, .135, .15, .86)',
            'ease-in-back': 'cubic-bezier(.6, -.28, .735, .045)',
            'ease-out-back': 'cubic-bezier(.175, .885, .32, 1.275)',
            'ease-in-out-back': 'cubic-bezier(.68, -.55, .265, 1.55)',
            'ease-out-elastic': 'linear(0, .5737 7.6%, .8382 11.87%, .9463 14.19%, 1.0292 16.54%, 1.0886 18.97%, 1.1258 21.53%, 1.137 22.97%, 1.1424 24.48%, 1.1423 26.1%, 1.1366 27.86%, 1.1165 31.01%, 1.0507 38.62%, 1.0219 42.57%, .9995 46.99%, .9872 51.63%, .9842 58.77%, 1.0011 81.26%, 1)',
            'ease-out-elastic-100-30': 'linear(0, .2178 2.1%, 1.1144 8.49%, 1.2959 10.7%, 1.3463 11.81%, 1.3705 12.94%, 1.3726, 1.3643 14.48%, 1.3151 16.2%, 1.0317 21.81%, .941 24.01%, .8912 25.91%, .8694 27.84%, .8698 29.21%, .8824 30.71%, 1.0122 38.33%, 1.0357, 1.046 42.71%, 1.0416 45.7%, .9961 53.26%, .9839 57.54%, .9853 60.71%, 1.0012 68.14%, 1.0056 72.24%, .9981 86.66%, 1)'
        };

        this.animations = {
            'fade-in': {
                from: { opacity: 0 },
                to: { opacity: 1 }
            },
            'fade-in-up': {
                from: { opacity: 0, transform: 'translateY(50px)' },
                to: { opacity: 1, transform: 'translateY(0)' }
            },
            'fade-in-down': {
                from: { opacity: 0, transform: 'translateY(-50px)' },
                to: { opacity: 1, transform: 'translateY(0)' }
            },
            'fade-in-left': {
                from: { opacity: 0, transform: 'translateX(-50px)' },
                to: { opacity: 1, transform: 'translateX(0)' }
            },
            'fade-in-right': {
                from: { opacity: 0, transform: 'translateX(50px)' },
                to: { opacity: 1, transform: 'translateX(0)' }
            },
            'slide-up': {
                from: { transform: 'translateY(100%)' },
                to: { transform: 'translateY(0)' }
            },
            'slide-down': {
                from: { transform: 'translateY(-100%)' },
                to: { transform: 'translateY(0)' }
            },
            'slide-left': {
                from: { transform: 'translateX(50px)' },
                to: { transform: 'translateX(0)' }
            },
            'slide-right': {
                from: { transform: 'translateX(-50px)' },
                to: { transform: 'translateX(0)' }
            },
            'scale-in': {
                from: { opacity: 0, transform: 'scale(0.75)' },
                to: { opacity: 1, transform: 'scale(1)' }
            },
            'scale-out': {
                from: { opacity: 0, transform: 'scale(1.25)' },
                to: { opacity: 1, transform: 'scale(1)' }
            },
            'zoom-in': {
                from: { opacity: 0, transform: 'scale(0)' },
                to: { opacity: 1, transform: 'scale(1)' }
            },
            'rotate-in': {
                from: { opacity: 0, transform: 'rotate(-180deg) scale(0.75)' },
                to: { opacity: 1, transform: 'rotate(0deg) scale(1)' }
            },
            'flip-in-x': {
                from: { opacity: 0, transform: 'perspective(1000px) rotateX(-90deg)' },
                to: { opacity: 1, transform: 'perspective(1000px) rotateX(0deg)' }
            },
            'flip-in-y': {
                from: { opacity: 0, transform: 'perspective(1000px) rotateY(-90deg)' },
                to: { opacity: 1, transform: 'perspective(1000px) rotateY(0deg)' }
            },
            'bounce-in': {
                from: { opacity: 0, transform: 'scale(0.5)' },
                to: { opacity: 1, transform: 'scale(1)' }
            },
            'elastic-in': {
                from: { opacity: 0, transform: 'scale(0)' },
                to: { opacity: 1, transform: 'scale(1)' }
            }
        };

        this.defaults = {
            duration: 1000,
            delay: 0,
            easing: 'ease-out-cubic',
            threshold: 0.15,
            distance: 50,
        };

        this.init();
    }

    init() {
        // Check for reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        // Initialize all elements with data-anim
        this.initAnimations();
        this.initStaggered();
    }

    initAnimations() {
        const elements = document.querySelectorAll('[data-animate]');

        elements.forEach(el => {
            const config = this.getConfig(el);

            // Set initial state
            Object.assign(el.style, this.animations[config.type].from);

            // Create observer
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            this.animate(el, config);
                        }, config.delay);
                        observer.unobserve(el);
                    }
                });
            }, {
                threshold: config.threshold,
                rootMargin: '-10% 0px'
            });

            observer.observe(el);
        });
    }

    initStaggered() {
        const staggerGroups = document.querySelectorAll('[data-animate-stagger]');

        staggerGroups.forEach(group => {
            const staggerDelay = parseInt(group.getAttribute('data-animate-stagger')) || 150;
            const children = group.querySelectorAll('[data-animate]');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        children.forEach((child, index) => {
                            const config = this.getConfig(child);

                            // Set initial state
                            Object.assign(child.style, this.animations[config.type].from);

                            setTimeout(() => {
                                this.animate(child, config);
                            }, index * staggerDelay + config.delay);
                        });
                        observer.unobserve(group);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '-10% 0px'
            });

            observer.observe(group);
        });
    }

    getConfig(el) {
        const type = el.getAttribute('data-animate');
        const duration = parseInt(el.getAttribute('data-animate-duration')) || this.defaults.duration;
        const delay = parseInt(el.getAttribute('data-animate-delay')) || this.defaults.delay;
        const easing = el.getAttribute('data-animate-ease') || this.defaults.easing;
        const threshold = parseFloat(el.getAttribute('data-animate-threshold')) || this.defaults.threshold;
        const distance = parseInt(el.getAttribute('data-animate-distance'));

        let animConfig = { ...this.animations[type] };

        // Apply custom distance if specified
        if (distance) {
            if (type.includes('up')) {
                animConfig.from.transform = `translateY(${distance}px)`;
            } else if (type.includes('down')) {
                animConfig.from.transform = `translateY(-${distance}px)`;
            } else if (type.includes('left')) {
                animConfig.from.transform = `translateX(-${distance}px)`;
            } else if (type.includes('right')) {
                animConfig.from.transform = `translateX(${distance}px)`;
            }
        }

        return {
            type,
            duration,
            delay,
            easing: this.easings[easing] || easing,
            threshold,
            ...animConfig
        };
    }

    animate(el, config) {
        const animation = el.animate(
            [config.from, config.to],
            {
                duration: config.duration,
                easing: config.easing,
                fill: 'forwards'
            }
        );

        animation.onfinish = () => {
            Object.assign(el.style, config.to);
        };
    }
}

// Initialize library when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new AnimationLibrary());
} else {
    new AnimationLibrary();
}

// Utility functions
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}