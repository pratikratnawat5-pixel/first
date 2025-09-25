// Store -> hover
const abc = document.querySelector("#a1");
const xyz = document.querySelector(".hover");

if (abc && xyz) {
  abc.addEventListener("mouseenter", () => {
    xyz.style.display = "block";
  });

  xyz.addEventListener("mouseenter", () => {
    xyz.style.display = "block";
  });

  abc.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!xyz.matches(":hover")) {
        xyz.style.display = "none";
      }
    }, 100);
  });

  xyz.addEventListener("mouseleave", () => {
    xyz.style.display = "none";
  });
}


// Phone -> hover
const mno = document.querySelector("#a2");
const pqr = document.querySelector(".hover2");

if (mno && pqr) {
  mno.addEventListener("mouseenter", () => {
    pqr.style.display = "block";
  });

  pqr.addEventListener("mouseenter", () => {
    pqr.style.display = "block";
  });

  mno.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!pqr.matches(":hover")) {
        pqr.style.display = "none";
      }
    }, 100);
  });

  pqr.addEventListener("mouseleave", () => {
    pqr.style.display = "none";
  });
}


// Tablet -> hover
const ram = document.querySelector("#a3");
const shyam = document.querySelector(".hover3");

if (ram && shyam) {
  ram.addEventListener("mouseenter", () => {
    shyam.style.display = "block";
  });

  shyam.addEventListener("mouseenter", () => {
    shyam.style.display = "block";
  });

  ram.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!shyam.matches(":hover")) {
        shyam.style.display = "none";
      }
    }, 100);
  });

  shyam.addEventListener("mouseleave", () => {
    shyam.style.display = "none";
  });
}


// Wearables -> hover
const lokesh = document.querySelector("#a4");
const vinit = document.querySelector(".hover4");

if (lokesh && vinit) {
  lokesh.addEventListener("mouseenter", () => {
    vinit.style.display = "block";
  });

  vinit.addEventListener("mouseenter", () => {
    vinit.style.display = "block";
  });

  lokesh.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!vinit.matches(":hover")) {
        vinit.style.display = "none";
      }
    }, 100);
  });

  vinit.addEventListener("mouseleave", () => {
    vinit.style.display = "none";
  });
}


// Audio -> hover
const x = document.querySelector("#a5");
const y = document.querySelector(".hover5");

if (x && y) {
  x.addEventListener("mouseenter", () => {
    y.style.display = "block";
  });

  y.addEventListener("mouseenter", () => {
    y.style.display = "block";
  });

  x.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!y.matches(":hover")) {
        y.style.display = "none";
      }
    }, 100);
  });

  y.addEventListener("mouseleave", () => {
    y.style.display = "none";
  });
}  

// Audio -> hover
const p = document.querySelector("#a6");
const r = document.querySelector(".hover6");

if (p && r) {
  p.addEventListener("mouseenter", () => {
    r.style.display = "block";
  });

  r.addEventListener("mouseenter", () => {
    r.style.display = "block";
  });

  p.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!r.matches(":hover")) {
        r.style.display = "none";
      }
    }, 100);
  });

  r.addEventListener("mouseleave", () => {
    r.style.display = "none";
  });
}
const o = document.querySelector("#a7");
const i = document.querySelector(".hover7");

if (o && i) {
  o.addEventListener("mouseenter", () => {
    i.style.display = "block";
  });

  i.addEventListener("mouseenter", () => {
    i.style.display = "block";
  });

  o.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!i.matches(":hover")) {
        i.style.display = "none";
      }
    }, 100);
  });

  i.addEventListener("mouseleave", () => {
    i.style.display = "none";
  });
}  
const front = document.querySelector("#a8");
const back = document.querySelector(".hover8");

if (front && back) {
  front.addEventListener("mouseenter", () => {
    back.style.display = "block";
  });

  back.addEventListener("mouseenter", () => {
    back.style.display = "block";
  });

  front.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!back.matches(":hover")) {
        back.style.display = "none";
      }
    }, 100);
  });

  back.addEventListener("mouseleave", () => {
    back.style.display = "none";
  });
} 
const leg = document.querySelector("#a9");
const hand = document.querySelector(".hover9");

if (leg && hand) {
  leg.addEventListener("mouseenter", () => {
    hand.style.display = "block";
  });

  hand.addEventListener("mouseenter", () => {
    hand.style.display = "block";
  });

  leg.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!hand.matches(":hover")) {
        hand.style.display = "none";
      }
    }, 100);
  });

  hand.addEventListener("mouseleave", () => {
    hand.style.display = "none";
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const bannerClose = document.querySelector("#main p i");
  if (bannerClose) {
    bannerClose.addEventListener("click", () => {
      document.querySelector("#main").style.display = "none";
    });
  }
}); 
const phoneInput = document.getElementById("phone");
    const actionBtn = document.getElementById("actionBtn");

    phoneInput.addEventListener("focus", () => {
      actionBtn.textContent = "Get Code";
    });

    phoneInput.addEventListener("blur", () => {
      if (phoneInput.value === "") {
        actionBtn.textContent = "Notify";
      }
    });
const toggleLink = document.getElementById("toggleLink");
    const extraContent = document.getElementById("extraContent");

    toggleLink.addEventListener("click", function (e) {
      e.preventDefault();
      if (extraContent.style.display === "none" || extraContent.style.display === "") {
        extraContent.style.display = "block";
        toggleLink.textContent = "Show Less";
      } else {
        extraContent.style.display = "none";
        toggleLink.textContent = "Show More";
      }
    });

//  const searchContainer = document.querySelector('.search-container');
//     const input = searchContainer.querySelector('input');
//     const suggestions = searchContainer.querySelector('.suggestions');

//     // Show on icon hover / input focus
//     searchContainer.addEventListener('mouseenter', () => {
//       suggestions.style.display = 'block';
//     });
//     input.addEventListener('focus', () => {
//       suggestions.style.display = 'block';
//     });

//     // Hide when leaving both container and input loses focus
//     searchContainer.addEventListener('mouseleave', () => {
//       if (document.activeElement !== input) { // only hide if input is not focused
//         suggestions.style.display = 'none';
//       }
//     });
//     input.addEventListener('blur', () => {
//       // small timeout to allow clicking suggestion
//       setTimeout(() => {
//         suggestions.style.display = 'none';
//       }, 200);
//     });
