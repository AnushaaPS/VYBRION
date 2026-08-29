/* =========================================================
   VYBRION CIVIL TECH ACADEMY
   COURSES PAGE JAVASCRIPT
   ========================================================= */


/* =========================================================
   COURSE DATA
   ========================================================= */

const courses = [

    /* =====================================================
       SOFTWARE COURSES
       ===================================================== */

    {
        id: "autocad",
        name: "AutoCAD",
        type: "software",
        duration: "6 Weeks",
        fee: "₹3,299",

        desc: "A practical CAD course covering 2D drafting workflows, drawing management and a complete working-drawing package.",

        included: [
            "Drawing setup and drafting standards",
            "2D drafting and modification tools",
            "Layers, blocks and annotations",
            "Dimensions and text styles",
            "Layouts and plotting",
            "Complete working-drawing project"
        ],

        pdf: "assets/pdfs/AutoCAD_Course Details.pdf"
    },


    {
        id: "staad",
        name: "STAAD.Pro",
        type: "software",
        duration: "8 Weeks",
        fee: "₹5,999",

        desc: "Structural analysis and design using 3D modelling, loading, result interpretation and RC/steel design workflows.",

        included: [
            "Structural modelling",
            "Load cases and combinations",
            "Analysis and result interpretation",
            "RC structural design",
            "Steel structural design",
            "Complete structural analysis project"
        ],

        pdf: "assets/pdfs/STAAD.Pro_Course Details.pdf"
    },


    {
        id: "safe",
        name: "CSI SAFE",
        type: "software",
        duration: "5 Weeks",
        fee: "₹4,399",

        desc: "Structural foundation and slab analysis/design workflows with a portfolio-oriented capstone.",

        included: [
            "Slab modelling",
            "Load definition",
            "Analysis and result interpretation",
            "Slab design",
            "Foundation modelling",
            "Structural design project"
        ],

        pdf: "assets/pdfs/CSI SAFE_Course Details.pdf"
    },


    {
        id: "etabs",
        name: "ETABS",
        type: "software",
        duration: "7 Weeks",
        fee: "₹5,499",

        desc: "3D building analysis and design covering gravity, wind and seismic analysis, drift checks and RC/steel design.",

        included: [
            "3D building modelling",
            "Gravity load analysis",
            "Wind load analysis",
            "Seismic analysis",
            "Concrete and steel frame design",
            "Multi-storey RC building capstone project"
        ],

        pdf: "assets/pdfs/ETABS_Course Details.pdf"
    },


    {
        id: "rcdc",
        name: "RCDC",
        type: "software",
        duration: "4 Weeks",
        fee: "₹3,799",

        desc: "Practical RC detailing and design workflow for producing professional structural deliverables.",

        included: [
            "RCDC project setup",
            "Structural model import",
            "Column and beam design",
            "Slab and footing design",
            "Reinforcement detailing",
            "Complete RC detailing project"
        ],

        pdf: "assets/pdfs/RCDC_Course Details.pdf"
    },


    {
        id: "idea",
        name: "IDEA StatiCa",
        type: "software",
        duration: "4 Weeks",
        fee: "₹4,999",

        desc: "Steel connection design and verification workflows, including a sample industrial structure connection project.",

        included: [
            "Connection modelling",
            "Load and design inputs",
            "Steel connection analysis",
            "Connection verification",
            "Design checks and reports",
            "Industrial connection project"
        ],

        pdf: "assets/pdfs/IDEA StatiCa_Course Details.pdf"
    },


    {
        id: "revit-arch",
        name: "Revit Architecture",
        type: "software",
        duration: "7 Weeks",
        fee: "₹6,999",

        desc: "BIM authoring from parametric building modelling and families to construction documentation.",

        included: [
            "Levels, grids and building elements",
            "Parametric modelling",
            "Families and components",
            "Stairs, roofs and site modelling",
            "Sheets and documentation",
            "Architectural BIM project"
        ],

        pdf: "assets/pdfs/Revit Architecture_Course Details.pdf"
    },


    {
        id: "revit-struct",
        name: "Revit Structure",
        type: "software",
        duration: "7 Weeks",
        fee: "₹5,499",

        desc: "Structural BIM covering columns, beams, footings, slabs, rebar, coordination and documentation.",

        included: [
            "Structural BIM modelling",
            "Columns, beams and slabs",
            "Footings and foundations",
            "Rebar modelling",
            "Structural documentation",
            "BIM coordination project"
        ],

        pdf: "assets/pdfs/Revit Structure_Course Details.pdf"
    },


    {
        id: "sketchup",
        name: "SketchUp",
        type: "software",
        duration: "5 Weeks",
        fee: "₹5,999",

        desc: "Fast 3D conceptual modelling with materials, site context, scenes and presentation-ready output.",

        included: [
            "3D modelling fundamentals",
            "Groups and components",
            "Materials and textures",
            "Site context modelling",
            "Scenes and walkthroughs",
            "Building presentation project"
        ],

        pdf: "assets/pdfs/SketchUp_Course Details.pdf"
    },


    {
        id: "lumion",
        name: "Lumion",
        type: "software",
        duration: "4 Weeks",
        fee: "₹3,799",

        desc: "Photorealistic rendering and animation for architectural models, environments and walkthroughs.",

        included: [
            "Model import and scene setup",
            "Materials and environments",
            "Lighting and atmosphere",
            "Landscape and site context",
            "Rendering",
            "Walkthrough animation"
        ],

        pdf: "assets/pdfs/Lumion_Course Details.pdf"
    },


    {
        id: "primavera",
        name: "Primavera P6",
        type: "software",
        duration: "5 Weeks",
        fee: "₹5,399",

        desc: "Construction planning and scheduling workflows designed around professional project-management practice.",

        included: [
            "Project setup",
            "WBS and activities",
            "Relationships and scheduling",
            "Resources and calendars",
            "Progress tracking",
            "Construction planning project"
        ],

        pdf: "assets/pdfs/Primavera P6_Course Details.pdf"
    },


    {
        id: "navisworks",
        name: "Navisworks",
        type: "software",
        duration: "4 Weeks",
        fee: "₹3,799",

        desc: "Model coordination and practical digital-construction workflows for multidisciplinary projects.",

        included: [
            "Model aggregation",
            "Model navigation",
            "Clash detection",
            "Coordination workflows",
            "Review and communication",
            "Coordination project"
        ],

        pdf: "assets/pdfs/Naviswork_Course Details.pdf"
    },


    /* =====================================================
       TECHNICAL COURSES
       ===================================================== */

    {
        id: "mechanics",
        name: "Engineering Mechanics",
        type: "technical",
        duration: "4 Weeks",
        fee: "₹1,699"
    },

    {
        id: "structural-analysis",
        name: "Structural Analysis",
        type: "technical",
        duration: "6 Weeks",
        fee: "₹2,799"
    },

    {
        id: "rcc",
        name: "RCC Design",
        type: "technical",
        duration: "8 Weeks",
        fee: "₹3,299"
    },

    {
        id: "steel",
        name: "Steel Structure Design",
        type: "technical",
        duration: "8 Weeks",
        fee: "₹3,299"
    },

    {
        id: "prestressed",
        name: "Prestressed Concrete",
        type: "technical",
        duration: "6 Weeks",
        fee: "₹2,199"
    },

    {
        id: "fea",
        name: "Finite Element Analysis",
        type: "technical",
        duration: "6 Weeks",
        fee: "₹2,799"
    },

    {
        id: "surveying",
        name: "Surveying",
        type: "technical",
        duration: "5 Weeks",
        fee: "₹2,199"
    },

    {
        id: "materials",
        name: "Building Materials & Concrete Technology",
        type: "technical",
        duration: "5 Weeks",
        fee: "₹2,199"
    },

    {
        id: "construction-tech",
        name: "Construction Technology",
        type: "technical",
        duration: "5 Weeks",
        fee: "₹2,199"
    },

    {
        id: "geotech",
        name: "Geotechnical Engineering",
        type: "technical",
        duration: "6 Weeks",
        fee: "₹2,799"
    },

    {
        id: "foundation",
        name: "Foundation Engineering",
        type: "technical",
        duration: "6 Weeks",
        fee: "₹2,799"
    },

    {
        id: "quantity",
        name: "Quantity Surveying & Estimation",
        type: "technical",
        duration: "5 Weeks",
        fee: "₹2,799"
    },

    {
        id: "planning",
        name: "Construction Planning & Management",
        type: "technical",
        duration: "5 Weeks",
        fee: "₹2,799"
    },

    {
        id: "bim",
        name: "BIM & Digital Construction",
        type: "technical",
        duration: "5 Weeks",
        fee: "₹3,299"
    }

];


/* =========================================================
   PAGE ELEMENTS
   ========================================================= */

const grid = document.getElementById("courseGrid");
const search = document.getElementById("courseSearch");
const filters = document.querySelectorAll(".filter");

let currentFilter = "all";


/* =========================================================
   RENDER COURSES
   ========================================================= */

function renderCourses() {

    const query = (search.value || "")
        .trim()
        .toLowerCase();


    const filtered = courses.filter(course => {

        const categoryOk =
            currentFilter === "all" ||
            course.type === currentFilter;


        const searchOk =
            !query ||
            `${course.name} ${course.type} ${course.desc || ""}`
                .toLowerCase()
                .includes(query);


        return categoryOk && searchOk;

    });


    grid.innerHTML = filtered.map(course => {

        const isSoftware =
            course.type === "software";


        /* =================================================
           SOFTWARE COURSE CARD
           ================================================= */

        if (isSoftware) {

            return `
                <article class="course-card software-course">

                    <div class="course-top">

                        <span class="course-type">
                            SOFTWARE COURSE
                        </span>

                        <span class="course-duration">
                            ${course.duration}
                        </span>

                    </div>


                    <h3>
                        ${course.name}
                    </h3>


                    <p class="course-description">
                        ${course.desc}
                    </p>


                    <div class="course-meta">

                        <span>
                            ${course.duration}
                        </span>

                        <strong>
                            ${course.fee}
                        </strong>

                    </div>


                    <div class="course-included">

                        <h4>
                            <span>✓</span>
                            Included in the course structure
                        </h4>


                        <ul>

                            ${course.included.map(item => `
                                <li>
                                    ${item}
                                </li>
                            `).join("")}

                        </ul>

                    </div>


                    <a
                        href="${course.pdf}"
                        class="course-pdf"
                        download
                    >
                        <span>↓</span>
                        Download Course PDF
                    </a>

                </article>
            `;

        }


        /* =================================================
           TECHNICAL COURSE CARD
           ================================================= */

        return `
            <article class="course-card technical-course">

                <div class="course-top">

                    <span class="course-type">
                        TECHNICAL COURSE
                    </span>

                    <span class="course-duration">
                        ${course.duration}
                    </span>

                </div>


                <h3>
                    ${course.name}
                </h3>


                <div class="technical-meta">

                    <span>
                        ${course.duration}
                    </span>

                    <strong>
                        ${course.fee}
                    </strong>

                </div>

            </article>
        `;

    }).join("");


    /* =====================================================
       NO RESULTS
       ===================================================== */

    if (!filtered.length) {

        grid.innerHTML = `
            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:50px;
                color:#667487;
            ">
                No matching courses found.
            </div>
        `;

    }

}


/* =========================================================
   FILTER BUTTONS
   ========================================================= */

filters.forEach(button => {

    button.addEventListener("click", () => {

        filters.forEach(item => {
            item.classList.remove("active");
        });


        button.classList.add("active");


        currentFilter =
            button.dataset.filter;


        renderCourses();

    });

});


/* =========================================================
   SEARCH
   ========================================================= */

search.addEventListener(
    "input",
    renderCourses
);


/* =========================================================
   INITIAL RENDER
   ========================================================= */

renderCourses();