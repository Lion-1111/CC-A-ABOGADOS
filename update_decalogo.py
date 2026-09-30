import os
import re

file_path = r'c:\Users\leona\Downloads\Trabajos de paginas web\cca_archivos\firma.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

decalogo_items = [
    {
        "title": "Estudia",
        "desc1": "El derecho se transforma constantemente,",
        "desc2": "si no sigues sus pasos, serás cada día menos abogado."
    },
    {
        "title": "Piensa",
        "desc1": "El derecho se aprende estudiando,",
        "desc2": "pero se ejerce pensando."
    },
    {
        "title": "Lucha",
        "desc1": "Tu deber es luchar por el derecho; pero el día en que encuentres en conflicto el derecho con la justicia,",
        "desc2": "lucha por la justicia."
    },
    {
        "title": "Trabaja",
        "desc1": "La abogacía es una ardua fatiga",
        "desc2": "puesta al servicio de la justicia."
    },
    {
        "title": "Sé leal",
        "desc1": "Leal para con tu cliente, al que no debes abandonar hasta que comprendas que es indigno de ti. Leal con el adversario, aún cuando él sea desleal contigo.",
        "desc2": "Leal para con el juez, que ignora los hechos y debe confiar en lo que tú le dices; y que, en cuanto al derecho, alguna que otra vez debe confiar en lo que tú invocas."
    },
    {
        "title": "Tolera",
        "desc1": "Tolera la verdad ajena en la",
        "desc2": "misma medida en que quieres que sea tolerada la tuya."
    },
    {
        "title": "Ten paciencia",
        "desc1": "En el derecho, el tiempo se venga",
        "desc2": "de las cosas que se hacen sin su colaboración."
    },
    {
        "title": "Ten fe",
        "desc1": "Ten fe en el derecho como el mejor instrumento para la convivencia humana; en la justicia, como destino normal del derecho;",
        "desc2": "en la paz como sustitutivo bondadoso de la justicia; y sobre todo ten fe en la libertad, sin la cual no hay derecho, ni justicia, ni paz."
    },
    {
        "title": "Olvida",
        "desc1": "La abogacía es una lucha de pasiones. Si en cada batalla fueras llenando tu alma de rencor, llegará un día que la vida será imposible para ti.",
        "desc2": "Concluido el combate, olvida tan pronto tu victoria como tu derrota."
    },
    {
        "title": "Ama tu profesión",
        "desc1": "Trata de considerar la abogacía de tal manera, que el día en que tu hijo te pida consejo sobre su destino,",
        "desc2": "consideres un honor para ti proponerle que se haga Abogado."
    }
]

carousel_html = """
                <style>
                    .decalogo-carousel .item {
                        background: #1a1a1a;
                        border: 1px solid #333;
                        border-radius: 10px;
                        padding: 30px 25px;
                        margin: 10px;
                        color: #ccc;
                        text-align: center;
                        min-height: 250px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                        transition: transform 0.3s ease;
                    }
                    .decalogo-carousel .item:hover {
                        transform: translateY(-5px);
                        border-color: #b59a6a;
                    }
                    .decalogo-number {
                        font-size: 40px;
                        color: #b59a6a;
                        font-family: serif;
                        font-weight: bold;
                        opacity: 0.3;
                        position: absolute;
                        top: 10px;
                        right: 20px;
                    }
                    .decalogo-title {
                        font-size: 22px;
                        color: #fff;
                        margin-bottom: 15px;
                        font-family: serif;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                    }
                    .decalogo-text {
                        font-size: 14px;
                        line-height: 1.6;
                    }
                    .decalogo-text strong {
                        color: #b59a6a;
                        font-weight: normal;
                    }
                </style>
                <div class="owl-carousel owl-theme decalogo-carousel mt-4 mb-5">
"""

for i, item in enumerate(decalogo_items):
    carousel_html += f"""
                    <div class="item">
                        <div class="decalogo-number">{i+1}</div>
                        <h3 class="decalogo-title">{item['title']}</h3>
                        <p class="decalogo-text">
                            {item['desc1']} <br><br>
                            <strong>{item['desc2']}</strong>
                        </p>
                    </div>
"""

carousel_html += """                </div>
                <script>
                    document.addEventListener('DOMContentLoaded', function() {
                        if(typeof $ !== 'undefined' && $.fn.owlCarousel) {
                            $('.decalogo-carousel').owlCarousel({
                                loop: true,
                                margin: 20,
                                nav: false,
                                dots: true,
                                autoplay: true,
                                autoplayTimeout: 5000,
                                autoplayHoverPause: true,
                                responsive: {
                                    0: { items: 1 },
                                    768: { items: 2 },
                                    1000: { items: 3 }
                                }
                            });
                        }
                    });
                </script>
"""

# Replace the old block
# We will use regex to find everything from <p class="text-p-6 col-md-6 px-0 text-justify "> down to </p>
# inside the decálogo section.
pattern = re.compile(r'<p class="text-p-6 col-md-6 px-0 text-justify ">\s*<strong style="font-size: 150%;padding-bottom: 5rem;">.*?</div>\s*<br>', re.DOTALL)

# Let's check if the pattern matches
if pattern.search(content):
    new_content = pattern.sub(carousel_html + '\n            </div>\n            <br>', content)
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Success: Decálogo updated!")
else:
    # Alternative strategy if pattern doesn't match perfectly
    print("Pattern not found. Using alternative string replacement.")
    start_str = '<p class="text-p-6 col-md-6 px-0 text-justify ">'
    end_str = 'honor\n\n                        para ti proponerle que se haga Abogado.</strong>\n\n                </p>\n\n            </div>'
    
    start_idx = content.find(start_str)
    if start_idx != -1:
        end_idx = content.find('</div>', start_idx)
        if end_idx != -1:
            new_content = content[:start_idx] + carousel_html + '\n            ' + content[end_idx:]
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print("Success with alternative method!")
        else:
            print("End tag not found.")
    else:
        print("Start tag not found.")
