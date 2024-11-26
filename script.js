function showVisualization() {
    const visualization = document.getElementById("visualization");
    visualization.innerHTML = `
        <div class="visualization-card" style="background-color: #e74c3c;">
            <h3>O(n) - Linear Time</h3>
            <p>This is a simple visualization of O(n) time complexity. The execution time increases linearly with the input size.</p>
        </div>
        <div class="visualization-card" style="background-color: #3498db;">
            <h3>O(n²) - Quadratic Time</h3>
            <p>This is a simple visualization of O(n²) time complexity. The execution time grows quadratically with the input size.</p>
        </div>
    `;
}
