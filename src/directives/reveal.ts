import type { Directive } from "vue";

const observers = new WeakMap<HTMLElement, IntersectionObserver>();

const reveal: Directive<HTMLElement> = {
  beforeMount(element) {
    if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.classList.add("v-reveal");
    }
  },
  mounted(element) {
    if (!element.classList.contains("v-reveal")) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;

        element.classList.add("v-reveal--visible");
        observer.disconnect();
        observers.delete(element);
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    observers.set(element, observer);
    observer.observe(element);
  },
  unmounted(element) {
    observers.get(element)?.disconnect();
    observers.delete(element);
  },
};

export default reveal;
