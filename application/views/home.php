<div style="margin-top:18px;">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <div class="row">
              <div class="col">
                <h1 style="color: #3a3a3b">Bar Chart</h1>
              </div>
              <div class="col d-flex justify-content-end align-items-end">
                <button onclick="fungsi4()" id="1a" class="btn btn-primary justify-content-end align-self-center" type="button">Tampilkan Chart</button>
              </div>
            </div>
          </div>
          <div class="card-body" style="display: none;" id="1">
            <canvas id="myChart"></canvas>
          </div>
        </div>
      </div>
    </div>
    <div class="row" style="margin-top:27px; margin-bottom:27px">
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            <div class="row">
              <div class="col">
                <h5 style="color: #3a3a3b">Pie Chart</h5>
              </div>
              <div class="col d-flex justify-content-end align-items-end">
                <button onclick="fungsi3()" id="2a" class="btn btn-primary justify-content-end align-self-center btn-sm" type="button">Tampilkan Chart</button>
              </div>
            </div>
          </div>
          <div class="card-body" style="display: none;" id="2">
            <canvas id="myChart1"></canvas>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            <div class="row">
              <div class="col">
                <h5>Bar</h5>
              </div>
              <div class="col d-flex justify-content-end"><button id="3a" onclick="fungsi()" class="btn btn-primary btn-sm">Tampilkan</button></div>
            </div>
          </div>
          <div class="card-body" style="display: none;" id="3">
            <canvas id="myChart2"></canvas>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            <div class="row">
              <div class="col">
                <h5>Chart</h5>
              </div>
              <div class="col d-flex justify-content-end"><button id="4a" onclick="fungsi2()" class="btn btn-primary btn-sm">Tampilkan</button></div>
            </div>
          </div>
          <ul id="4" class="list-group list-group-flush" style="display: none;">
            <li class="list-group-item">
              <form action="submit">
                <div class="form-group" style="margin-bottom: 7px;">
                  <p style="margin-bottom: 7px">Keterangan</p>
                </div>
                <div class="form-group" style="margin-bottom: 0px; height: 25px;">
                  <div class="progress">
                    <div class="progress-bar" style="width: 75%;">
                    </div>
                  </div>
                  <input onchange="updateTextInput(this.value);" type="range" min="0" max="100" class="slider" id="myRange" style="z-index: 1; position: relative; bottom: 21px">
                </div>
                <div class="container" style="padding: 0px 0px;">
                  <div class="row">
                    <div class="col d-flex">
                      <p>Mean: </p>
                      <p id="id" style="margin-left: 10px;"></p>
                    </div>
                    <div class="col d-flex justify-content-end">
                      <p>Nilai: </p>
                      <p style="margin-left: 10px;">XX</p>
                    </div>
                  </div>
                </div>
              </form>
            </li>
            <li class="list-group-item">
              <div class="progress">
                <div class="progress-bar"></div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="progress">
                <div class="progress-bar"></div>
              </div>
            </li>
          </ul>
          </form>
        </div>
      </div>
    </div>
  </div>