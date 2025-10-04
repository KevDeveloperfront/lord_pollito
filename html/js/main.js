document.addEventListener('DOMContentLoaded', () => {
    // Animar Barra EXP
    const expFill = document.getElementById('expFill');
    setTimeout(() => {
        expFill.style.width = '70%'; // 7/10 = 70%
    }, 500);

    // Tooltips en Stats (solo click)
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => {
        stat.addEventListener('click', () => {
            const tooltipText = stat.getAttribute('data-stat');
            alert(tooltipText);
        });
    });

    // Tooltips en Habilidades (solo click)
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.addEventListener('click', () => {
            const tooltipText = skill.getAttribute('data-skill');
            alert(tooltipText);
        });
    });

    // Toggle Historia
    const toggleHistoryBtn = document.getElementById('toggleHistory');
    const historyContent = document.getElementById('historyContent');
    toggleHistoryBtn.addEventListener('click', () => {
        if (historyContent.style.display === 'none' || historyContent.style.display === '') {
            historyContent.style.display = 'block';
            toggleHistoryBtn.textContent = 'Ocultar Historia';
        } else {
            historyContent.style.display = 'none';
            toggleHistoryBtn.textContent = 'Mostrar Historia';
        }
    });

    // Toggle Estadísticas
    const toggleStatsBtn = document.getElementById('toggleStats');
    const statsContent = document.getElementById('statsContent');
    toggleStatsBtn.addEventListener('click', () => {
        if (statsContent.style.display === 'none' || statsContent.style.display === '') {
            statsContent.style.display = 'block';
            toggleStatsBtn.textContent = 'Ocultar Estadísticas';
        } else {
            statsContent.style.display = 'none';
            toggleStatsBtn.textContent = 'Mostrar Estadísticas';
        }
    });

    // Toggle Habilidades
    const toggleSkillsBtn = document.getElementById('toggleSkills');
    const skillsContent = document.getElementById('skillsContent');
    toggleSkillsBtn.addEventListener('click', () => {
        if (skillsContent.style.display === 'none' || skillsContent.style.display === '') {
            skillsContent.style.display = 'block';
            toggleSkillsBtn.textContent = 'Ocultar Habilidades';
        } else {
            skillsContent.style.display = 'none';
            toggleSkillsBtn.textContent = 'Mostrar Habilidades';
        }
    });
});
