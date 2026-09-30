import re

file_path = r'c:\Users\leona\Downloads\Trabajos de paginas web\cca_archivos\firma.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

decalogo_items = [
    ("Estudia", "fa-book-reader", "El derecho se transforma constantemente,", "si no sigues sus pasos, serás cada día menos abogado.", "show"),
    ("Piensa", "fa-brain", "El derecho se aprende estudiando,", "pero se ejerce pensando.", ""),
    ("Lucha", "fa-fist-raised", "Tu deber es luchar por el derecho; pero el día en que encuentres en conflicto el derecho con la justicia,", "lucha por la justicia.", ""),
    ("Trabaja", "fa-briefcase", "La abogacía es una ardua fatiga", "puesta al servicio de la justicia.", ""),
    ("Sé leal", "fa-handshake", "Leal para con tu cliente, al que no debes abandonar hasta que comprendas que es indigno de ti. Leal con el adversario, aún cuando él sea desleal contigo.", "Leal para con el juez, que ignora los hechos y debe confiar en lo que tú le dices; y que, en cuanto al derecho, alguna que otra vez debe confiar en lo que tú invocas.", ""),
    ("Tolera", "fa-users", "Tolera la verdad ajena en la", "misma medida en que quieres que sea tolerada la tuya.", ""),
    ("Ten paciencia", "fa-hourglass-half", "En el derecho, el tiempo se venga", "de las cosas que se hacen sin su colaboración.", ""),
    ("Ten fe", "fa-dove", "Ten fe en el derecho como el mejor instrumento para la convivencia humana; en la justicia, como destino normal del derecho;", "en la paz como sustitutivo bondadoso de la justicia; y sobre todo ten fe en la libertad, sin la cual no hay derecho, ni justicia, ni paz.", ""),
    ("Olvida", "fa-eraser", "La abogacía es una lucha de pasiones. Si en cada batalla fueras llenando tu alma de rencor, llegará un día que la vida será imposible para ti.", "Concluido el combate, olvida tan pronto tu victoria como tu derrota.", ""),
    ("Ama tu profesión", "fa-heart", "Trata de considerar la abogacía de tal manera, que el día en que tu hijo te pida consejo sobre su destino,", "consideres un honor para ti proponerle que se haga Abogado.", "")
]

accordion_html = """                <style>
                    .decalogo-acc-btn {
                        background: #111;
                        border: 1px solid #333;
                        border-radius: 8px !important;
                        transition: all 0.3s ease;
                        box-shadow: 0 4px 10px rgba(0,0,0,0.5);
                    }
                    .decalogo-acc-btn:hover, .decalogo-acc-btn[aria-expanded="true"] {
                        background: #1a1a1a;
                        border-color: #b59a6a;
                        transform: translateX(5px);
                    }
                    .decalogo-acc-btn[aria-expanded="true"] .fa-chevron-down {
                        transform: rotate(180deg);
                    }
                    .decalogo-icon {
                        color: #b59a6a;
                        font-size: 1.6rem;
                        width: 40px;
                        text-align: center;
                    }
                    .decalogo-body-wrap {
                        border-left: 2px solid #b59a6a;
                        margin-left: 2.2rem;
                        padding-left: 1.5rem;
                        padding-top: 1rem;
                        padding-bottom: 1rem;
                        color: #ccc;
                        font-size: 1rem;
                        line-height: 1.6;
                    }
                </style>

                <div class="accordion mt-5 mb-5 w-100" id="accordionDecalogo">
"""

for i, (title, icon, desc1, desc2, show_class) in enumerate(decalogo_items):
    collapsed = "" if show_class == "show" else "collapsed"
    aria_expanded = "true" if show_class == "show" else "false"
    
    accordion_html += f"""
                    <div class="card bg-transparent border-0 mb-3 aparece">
                        <div class="card-header p-0 bg-transparent border-0" id="heading{i}">
                            <button class="btn btn-block text-left text-white d-flex align-items-center decalogo-acc-btn py-3 px-4 {collapsed}" type="button" data-toggle="collapse" data-target="#collapse{i}" aria-expanded="{aria_expanded}" aria-controls="collapse{i}">
                                <i class="fas {icon} mr-3 decalogo-icon"></i>
                                <span style="font-size:1.1rem; font-family:Georgia, serif; letter-spacing:1px; font-weight:600; text-transform:uppercase;">{i+1}. {title}</span>
                                <i class="fas fa-chevron-down ml-auto" style="color:#666; transition:transform 0.3s;"></i>
                            </button>
                        </div>
                        <div id="collapse{i}" class="collapse {show_class}" aria-labelledby="heading{i}" data-parent="#accordionDecalogo">
                            <div class="card-body p-0">
                                <div class="decalogo-body-wrap text-justify">
                                    {desc1} <br><br>
                                    <strong style="color:#b59a6a; font-weight:normal;">{desc2}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
"""

accordion_html += "                </div>"

# Use regex to replace the current decalogo-grid block
pattern = re.compile(r'<style>\s*\.decalogo-grid {.*?</div>\s*</div>', re.DOTALL)

if pattern.search(content):
    new_content = pattern.sub(accordion_html, content)
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Success: Accordion injected!")
else:
    print("Pattern not found!")
