async function renderHeatmap() {
    try {
      const response = await fetch('assessment.json');
      const data = await response.json();
      const consoles = data.data.map(item=> item.name);
      const features = data.data[0].data.map(item=> item.label);
      const ratings = data.data.map(item =>item.data.map(label=>label.value));

      const heatmapData = [
        {
          x: features,
          y: consoles, 
          z: ratings,  
          type: 'heatmap',
          colorscale: 'YlOrRd',
          reversescale: true,
          showscale: false,
          
        }
      ];
  
      
      const layout = {
        xaxis: { title: 'Features' },
        yaxis: { title: 'Gaming Consoles' },
        margin: {
          l: 200
        },
        autosize: true,
      };

      Plotly.newPlot('heatmap', heatmapData, layout);
    } catch (error) {
      console.error('Error loading JSON data:', error);
    }
  }
  renderHeatmap();
  