$(document).ready(() => {

  let param = getParams("section");

  getInfo(param);

});

function getParams(parametro) {

  let url = new URL(window.location.href);

  let params = new URLSearchParams(url.search);

  let param = params.get(parametro);

  return param;

}

const getInfo = (section) => {

  const data = [

    {

      name: "DerechoInmobiliario",

      title: "",

      img: "./assets/img/servicios/Inmobiliario.jpg",

      data: `<h2 class="title-t-1 mb-4">DERECHO INMOBILIARIO 

      </h2>

      <p class="text-uppercase title-t-1">

          <strong>

              <ul>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Arrendamiento Inmobiliario.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Requerimiento extrajudicial de rentas.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Juicio hipotecario.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cumplimiento forzoso de contratos.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Remates.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fideicomiso inmobiliario.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Estrategias en adquisición de inmuebles.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Renta y administración de bienes inmuebles.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Creatividad en bienes raíces.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Comercialización inmobiliaria.</li>

              </ul>

          </strong>

       

      </p>`,

    },

    {

      name: "Familiar",

      title: "",

      img: "./assets/img/servicios/Familiar.jpg",

      data: `<h2 class="title-t-1 mb-4">DERECHO FAMILIAR</h2>

      <p class="text-uppercase title-t-1">

          

          <strong>

              <ul>

              <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Divorcio (Incausado, voluntario y administrativo).</li>

              <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Separación judicial.</li>

              <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nulidad de matrimonio.</li>

              <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Declaración de paternidad.</li>

              <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Suspensión y/o modificación de patria potestad.</li>

              <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Guarda y custodia.</li>

              <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pensión alimenticia.</li>

              <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Régimen de visitas.</li>

              <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Interdicción.</li>

              <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tutela.</li>

              <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Declaración de paternidad y Filiación.</li>

              <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Declaración de Ausente.</li>

              </ul>

          </strong>

       

      </p>`,

    },

    {

      name: "Constitucional",

      title: "",

      img: "./assets/img/servicios/Constitucional.jpg",

      data: `<h2 class="title-t-1 mb-4">DERECHO CONSTITUCIONAL</h2>

      <p class="text-uppercase title-t-1">

          <strong>

              <ul>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Juicio de Amparo.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Controversias constitucionales.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acciones de inconstitucionalidad.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Derechos Humanos.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amparo directo e indirecto.</li>

                  

              </ul>

          </strong>

       

      </p>`,

    },

    {

      name: "Fiscal",

      title: "",

      img: "./assets/img/servicios/Fiscal.jpg",

      data: `<h2 class="title-t-1 mb-4"></h2>

      <p class="text-uppercase title-t-1">

          

          <strong>

              <ul>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Recurso de revocación, inconformidad, queja y reclamación.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Juicio contencioso administrativo.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trámites ante el SAT, INFONAVIT, e IMSS.</li>

              </ul>

          </strong>

       

      </p>`,

    },

    {

      name: "Mercatil",

      title: "",

      img: "./assets/img/servicios/Mercantil.jpg",

      data: `<h2 class="title-t-1 mb-4">DERECHO MERCANTIL</h2>

      <p class="text-uppercase title-t-1">

          

          <strong>

              <ul>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Juicio Ordinario Mercantil.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Juicio Ejecutivo Mercantil.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Juicios Especiales.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Actas de asamblea general ordinaria y extraordinaria.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Comercio electrónico.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contratos Mercantiles.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Estrategias Mercantiles.</li>

              </ul>

          </strong>

       

      </p>`,

    },

    {

      name: "Aduanero",

      title: "",

      img: "./assets/img/servicios/Aduanero.jpg",

      data: `<h2 class="title-t-1 mb-4">DERECHO ADUANERO</h2>

      <p class="text-uppercase title-t-1">

          

          <strong>

              <ul>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Documentos y procedimientos a la importación.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Regímenes arancelarios.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Barreras comerciales.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Barreras no Arancelarias- Contingentes y Licencias de Importación y Exportación.</li>

              </ul>

          </strong>

       

      </p>`,

    },

    {

      name: "Corporativo",

      title: "",

      img: "./assets/img/servicios/Corporativo.jpg",

      data: `<h2 class="title-t-1 mb-4">DERECHO CORPORATIVO</h2>

      <p class="text-uppercase title-t-1">

          

          <strong>

              <ul>

                 <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alta Patronal.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Certificados Digitales Corporativos.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acta de Asamblea.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fusiones y adquisiciones.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Títulos accionarios.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Transformaciones y escisiones.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reestructuras corporativas y financieras.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Inversión extranjera.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Estrategias corporativas.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inscripción en el Registro Público de Comercio.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inscripción en el Registro Federal de Contribuyentes.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Certificado de Firma Electrónica.</li>

                  

              </ul>

          </strong>

       

      </p>`,

    },

    {

      name: "Administrativo",

      title: "",

      img: "./assets/img/servicios/Administrativo.jpg",

      data: `<h2 class="title-t-1 mb-4">DERECHO ADMINISTRATIVO</h2>

      <p class="text-uppercase title-t-1">

          

          <strong>

              <ul>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Juicio contencioso administrativo.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amonestación.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Multa.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Arresto.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clausura temporal o permanente.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acto Administrativo.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Recursos Administrativos.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Queja /normas de uso y aprovechamiento del suelo</li>

              </ul>

          </strong>

       

      </p>`,

    },

    {

      name: "DerechoCivil",

      title: "",

      img: "./assets/img/servicios/Civil.jpg",

      data: `<h2 class="title-t-1 mb-4">DERECHO CÍVIL</h2>

      <p class="text-uppercase title-t-1">

          

          <strong>

              <ul>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Usucapión.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jurisdicción Voluntria.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tercerias.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Desahucio.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contratos Civiles.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sucesión testamentaria.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sucesión Intestamentaria.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Estado Civil de las personas.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acciones Colectivas.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Créditos.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hipotecas.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Declaración unilateral de la voluntad.</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reclamación de Daños y Perjuicios .</li>

                  <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trámites Registrales.</li>



              </ul>

          </strong>

       

      </p>`,

    },

    // {

    //   name: "Notarial",

    //   title: "",

    //   img: "./assets/img/servicios/Servicios.jpg",

    //   data: `<h2 class="title-t-1 mb-4">DERECHO CIVIL</h2>

    //   <p class="text-uppercase title-t-1">

    //

    //       <strong>

    //           <ul>

    //               <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Interpretación y Cumplimiento de Contratos en Materia Civil.</li>

    //               <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acciones Colectivas.</li>

    //               <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Créditos.</li>

    //               <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hipotecas.</li>

    //               <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Arrendamiento Inmobiliario.</li>

    //               <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prestación de Servicios.</li>

    //               <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reclamación de Daños y Perjuicios.</li>

    //               <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Daño Moral.</li>

    //               <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sucesiónes.</li>

    //               <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Responsabilidad Civil.</li>

    //               <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Derechos de los Individuos, entre otros.</li>

    //               <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Controversias Inmobiliarias  y  Homologación, ejecución o impugnación de sentencias dictadas en el extranjero.</li>

    //           </ul>

    //       </strong>



    //   </p>`,

    // },



    // {

    //   name: "Amparo",

    //   title: "",

    //   img: "./assets/img/servicios/Servicios.jpg",

    //   data: `<h2 class="title-t-1 mb-4">DERECHO CIVIL</h2>

    //   <p class="text-uppercase title-t-1">

    //

    //       <strong>

    //           <ul>

    //               <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Interpretación y Cumplimiento de Contratos en Materia Civil.</li>

    //               <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acciones Colectivas.</li>

    //               <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Créditos.</li>

    //               <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hipotecas.</li>

    //               <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Arrendamiento Inmobiliario.</li>

    //               <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prestación de Servicios.</li>

    //               <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reclamación de Daños y Perjuicios.</li>

    //               <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Daño Moral.</li>

    //               <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sucesiónes.</li>

    //               <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Responsabilidad Civil.</li>

    //               <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Derechos de los Individuos, entre otros.</li>

    //               <li class="mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Controversias Inmobiliarias  y  Homologación, ejecución o impugnación de sentencias dictadas en el extranjero.</li>

    //           </ul>

    //       </strong>



    //   </p>`,

    // },

  ];

  let find = data.find((x) => x.name === section);

  $("#info").html(find.data);

  $("#img").attr("src", find.img);

  data.forEach((element) => {

    if (element.name === section) {

      $(`#${element.name}`)

        .removeClass("border-bottom-1")

        .addClass("border-bottom-selected");

    } else {

      $(`#${element.name}`)

        .removeClass("border-bottom-selected")

        .addClass("border-bottom-1");

    }

  });

};

