const root = document.documentElement;
const examples = {
  studio: {
    monogram: "a",
    name: "Ateliê",
    kind: "Estúdio criativo",
    eyebrow: "QUARTA-FEIRA · SEU ESTÚDIO",
    title: "Espaço para criar.",
    action: "Ver próxima sessão",
    heroLabel: "SUA AGENDA, EM HARMONIA",
    heroTitle: "Cada encontro.\nUma boa ideia.",
    description:
      "Os detalhes estão organizados.\nVocê pode focar no próximo projeto.",
    ticketLabel: "PRÓXIMA SESSÃO",
    ticketNumber: "10:30",
    ticketCaption: "Identidade visual",
    ticketFoot: "Sala 02 · 45 minutos",
    capacityTitle: "Ritmo da semana",
    capacityNote: "Horas reservadas por dia",
    capacityValue: "20 h",
    capacityCaption: "de 32 h disponíveis",
    chart: "Exemplo: segunda 3 horas, terça 5, quarta 4, quinta 6, sexta 2",
    metrics: [
      ["4", "Sessões hoje"],
      ["2", "A confirmar"],
      ["8", "Projetos ativos"],
    ],
    activityTitle: "Seus próximos encontros",
    activityNav: "Agenda",
    capacityNav: "Capacidade",
    search: "Buscar sessão ou cliente",
    records: [
      {
        time: "10:30",
        title: "Identidade visual",
        person: "Luiza · Estúdio Aurora",
        status: "Confirmada",
        state: "success",
        detail: "Revisão dos primeiros estudos de identidade.",
        location: "Sala 02",
        duration: "45 minutos",
      },
      {
        time: "13:00",
        title: "Direção de arte",
        person: "Rafael · Casa Linha",
        status: "A confirmar",
        state: "warning",
        detail: "Conversa sobre a próxima campanha.",
        location: "Online",
        duration: "60 minutos",
      },
      {
        time: "15:00",
        title: "Entrega de projeto",
        person: "Sofia · Forma",
        status: "Confirmada",
        state: "success",
        detail: "Apresentação dos materiais finais.",
        location: "Sala 01",
        duration: "30 minutos",
      },
      {
        time: "16:30",
        title: "Novo briefing",
        person: "André · Oficina",
        status: "A confirmar",
        state: "warning",
        detail: "Primeiro encontro para entender o projeto.",
        location: "Online",
        duration: "45 minutos",
      },
    ],
  },
  operations: {
    monogram: "n",
    name: "Norte",
    kind: "Operação e logística",
    eyebrow: "QUARTA-FEIRA · SUA OPERAÇÃO",
    title: "Tudo em movimento.",
    action: "Ver próxima expedição",
    heroLabel: "DO PEDIDO À ENTREGA",
    heroTitle: "Próxima parada.\nTudo preparado.",
    description:
      "Prioridades visíveis, equipe alinhada.\nAcompanhe cada etapa da operação.",
    ticketLabel: "PRÓXIMA EXPEDIÇÃO",
    ticketNumber: "11:00",
    ticketCaption: "Rota Centro",
    ticketFoot: "Doca 03 · 12 volumes",
    capacityTitle: "Expedições da semana",
    capacityNote: "Remessas previstas por dia",
    capacityValue: "40",
    capacityCaption: "de 64 posições ocupadas",
    chart:
      "Exemplo: segunda 6 remessas, terça 10, quarta 8, quinta 12, sexta 4",
    metrics: [
      ["4", "Rotas hoje"],
      ["1", "Pendência"],
      ["12", "Em preparo"],
    ],
    activityTitle: "Prioridades da operação",
    activityNav: "Expedições",
    capacityNav: "Volume",
    search: "Buscar rota ou responsável",
    records: [
      {
        time: "11:00",
        title: "Rota Centro",
        person: "Ana · Equipe de expedição",
        status: "Pronta",
        state: "success",
        detail: "Volumes separados e conferidos.",
        location: "Doca 03",
        duration: "12 volumes",
      },
      {
        time: "13:00",
        title: "Rota Norte",
        person: "Bruno · Separação",
        status: "Em preparo",
        state: "warning",
        detail: "Conferência de volumes em andamento.",
        location: "Doca 01",
        duration: "8 volumes",
      },
      {
        time: "14:30",
        title: "Rota Leste",
        person: "Clara · Expedição",
        status: "Pronta",
        state: "success",
        detail: "Carga pronta para saída.",
        location: "Doca 02",
        duration: "6 volumes",
      },
      {
        time: "16:00",
        title: "Rota Sul",
        person: "Daniel · Atendimento",
        status: "Revisar dados",
        state: "danger",
        detail: "Endereço de entrega incompleto. Aguardando revisão.",
        location: "Doca 04",
        duration: "4 volumes",
      },
    ],
  },
};
let brand =
  new URLSearchParams(location.search).get("brand") === "operations"
    ? "operations"
    : "studio";
let dark = new URLSearchParams(location.search).get("theme") === "dark";
let lastTrigger;
const $ = (id) => document.getElementById(id);
function text(id, value) {
  $(id).textContent = value;
}
function lines(id, value) {
  const node = $(id);
  node.replaceChildren();
  value.split("\n").forEach((line, index) => {
    if (index) node.append(document.createElement("br"), document.createTextNode(" "));
    node.append(document.createTextNode(line));
  });
}
function renderTheme() {
  root.dataset.suiTheme = dark ? "dark" : "light";
  $("theme-toggle").setAttribute("aria-pressed", String(dark));
}
function showDetail(index, trigger) {
  const item = examples[brand].records[index];
  lastTrigger = trigger;
  text("detail-title", item.title);
  text("detail-description", item.detail);
  const pairs = [
    ["Responsável", item.person.split(" · ")[0]],
    ["Horário", item.time],
    ["Local", item.location],
    [brand === "studio" ? "Duração" : "Quantidade", item.duration],
    ["Situação", item.status],
  ];
  $("detail-data").replaceChildren(
    ...pairs.flatMap(([name, value]) => {
      const dt = document.createElement("dt");
      dt.textContent = name;
      const dd = document.createElement("dd");
      dd.textContent = value;
      return [dt, dd];
    }),
  );
  $("detail-dialog").showModal();
}
function renderList() {
  const query = $("search")
    .value.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR");
  const records = examples[brand].records
    .map((record, index) => ({ ...record, index }))
    .filter((x) =>
      `${x.title} ${x.person}`
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLocaleLowerCase("pt-BR")
        .includes(query),
    );
  $("activity-list").replaceChildren(
    ...records.map((item) => {
      const row = document.createElement("div");
      row.className = "activity-row";
      const time = document.createElement("span");
      time.className = "row-time";
      time.textContent = item.time;
      const copy = document.createElement("div");
      copy.className = "row-copy";
      const title = document.createElement("strong");
      title.textContent = item.title;
      const subtitle = document.createElement("p");
      subtitle.textContent = item.person;
      copy.append(title, subtitle);
      const status = document.createElement("span");
      status.className = `sui-status sui-status--${item.state}`;
      status.textContent = item.status;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "detail-button";
      button.setAttribute("aria-label", `Ver detalhes: ${item.title}`);
      button.innerHTML = '<svg aria-hidden="true"><use href="#i-arrow"/></svg>';
      button.addEventListener("click", () => showDetail(item.index, button));
      row.append(time, copy, status, button);
      return row;
    }),
  );
  $("empty-state").hidden = records.length !== 0;
  text(
    "record-count",
    `${records.length} ${records.length === 1 ? "registro" : "registros"}`,
  );
  text(
    "search-feedback",
    `${records.length} ${records.length === 1 ? "resultado encontrado" : "resultados encontrados"}.`,
  );
}
function renderBrand() {
  const e = examples[brand];
  root.dataset.brand = brand;
  const mapping = {
    "product-monogram": e.monogram,
    "product-name": e.name,
    "product-kind": e.kind,
    "workspace-eyebrow": e.eyebrow,
    "workspace-title": e.title,
    "main-action": e.action,
    "hero-label": e.heroLabel,
    "ticket-label": e.ticketLabel,
    "ticket-number": e.ticketNumber,
    "ticket-caption": e.ticketCaption,
    "ticket-foot": e.ticketFoot,
    "capacity-title": e.capacityTitle,
    "capacity-note": e.capacityNote,
    "capacity-value": e.capacityValue,
    "capacity-caption": e.capacityCaption,
    "activity-title": e.activityTitle,
    "activity-nav": e.activityNav,
    "capacity-nav": e.capacityNav,
  };
  Object.entries(mapping).forEach(([id, value]) => text(id, value));
  lines("welcome-title", e.heroTitle);
  lines("hero-description", e.description);
  $("chart").setAttribute("aria-label", e.chart);
  ["one", "two", "three"].forEach((n, i) => {
    text(`metric-${n}`, e.metrics[i][0]);
    text(`metric-${n}-label`, e.metrics[i][1]);
  });
  $("search").value = "";
  $("search").placeholder = e.search;
  document
    .querySelectorAll("[data-example]")
    .forEach((button) =>
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.example === brand),
      ),
    );
  renderList();
}
document.querySelectorAll("[data-example]").forEach((button) =>
  button.addEventListener("click", () => {
    brand = button.dataset.example;
    renderBrand();
  }),
);
$("theme-toggle").addEventListener("click", () => {
  dark = !dark;
  renderTheme();
});
$("search").addEventListener("input", renderList);
$("open-detail").addEventListener("click", () =>
  showDetail(0, $("open-detail")),
);
$("detail-dialog").addEventListener("close", () =>
  lastTrigger?.focus({ preventScroll: true }),
);
renderTheme();
renderBrand();
