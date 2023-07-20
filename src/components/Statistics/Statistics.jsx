import 'index.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const Statistics = ({ title, stats }) => {
  return (
    <div class="statistics">
      {title && <h2 class="title">{title}</h2>}

      <ul class="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            class="item"
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span class="label-stats">{label}</span>
            <span class="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Statistics;
